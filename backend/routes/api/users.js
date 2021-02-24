const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('firstName')
        .exists({ checkFalsy: true })
        .isLength({ min: 2 })
        .withMessage('Please provide a first name with at least 2 characters.'),
    check('lastName')
        .exists({ checkFalsy: true })
        .isLength({ min: 2 })
        .withMessage('Please provide a last name with at least 2 characters.'),
    check('firstName')
        .not()
        .isEmail()
        .withMessage('Name cannot be an email.'),
    check('lastName')
        .not()
        .isEmail()
        .withMessage('Name cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

// Sign up
router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const user = await User.signup({ email, firstName, lastName, password });

    await setTokenCookie(res, user);

    return res.json({
        user,
    });
}));



module.exports = router;