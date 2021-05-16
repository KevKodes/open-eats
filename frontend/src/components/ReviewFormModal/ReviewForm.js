import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { postReview } from '../../store/reviews';
import StarPicker from 'react-star-picker';
import './ReviewForm.css';

export default function Reviewform({ oldReview }) {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const [overallRating, setOverallRating] = useState(null)
  const [serviceRating, setServiceRating] = useState(null)
  const [foodRating, setFoodRating] = useState(null)
  const [ambienceRating, setAmbienceRating] = useState(null)
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState([])
  console.log('the review to edit is: ', oldReview)

  useEffect(() => {
    setErrors([])
  }, [overallRating, serviceRating, foodRating, ambienceRating])

  // set the default values if there is a review passed down for editing
  useEffect(() => {
    if (oldReview) {
      setOverallRating(oldReview.overallRating);
      setAmbienceRating(oldReview.ambienceRating);
      setServiceRating(oldReview.serviceRating);
      setFoodRating(oldReview.foodRating);
      setDescription(oldReview.description);
    }
  }, [oldReview])

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      overallRating,
      foodRating,
      serviceRating,
      ambienceRating
    }


    let checkErrors = [];
    Object.keys(review).forEach(key => {
      if (!review[key]) {
        checkErrors.push(`Please add a rating for the "${key.slice(0, -6)}" category`)
      }
    })

    if (checkErrors.length) {
      setErrors(checkErrors)
    } else {
      // dispatch the review post
      review.description = description;
      review.userId = sessionUser.id;
      review.restaurantId = restaurantId;
      console.log('dispatched review post: ', review)
      dispatch(postReview(review));

      // return <Redirect to={`/restaurants/${restaurantId}`} />;
    }
  }

  return (
    <div className="review-modal-wrapper">
      <h1>Add a Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-ratings">
          <div className="rating-form-section">
            <h3>Overall</h3>
            <StarPicker
              onChange={value => setOverallRating(value)}
              value={overallRating}
              numberStars={5}
            />
          </div>
          <div className="rating-form-section">
            <h3>Food</h3>
            <StarPicker
              onChange={value => setFoodRating(value)}
              value={foodRating}
              numberStars={5}
            />
          </div>
          <div className="rating-form-section">
            <h3>Service</h3>
            <StarPicker
              onChange={value => setServiceRating(value)}
              value={serviceRating}
              numberStars={5}
            />
          </div>
          <div className="rating-form-section">
            <h3>Ambience</h3>
            <StarPicker
              onChange={value => setAmbienceRating(value)}
              value={ambienceRating}
              numberStars={5}
            />
          </div>
        </div>
        <textarea
          className="review-description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="How was your dining experience? (Optional)"  
        />
        <ul className='review-form-errors'>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <button className="review-form-button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}