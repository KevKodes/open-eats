import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './ProfileButton.css'

function ProfileButton({ user }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const signout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    return (
        <>
            <button className="profile-button in-button" onClick={openMenu}>
                <i className="far fa-user"></i>
            </button>
            {showMenu && (
                <div className="profile-dropdown">
                    <i className="fas fa-caret-up fa-3x"></i>
                    <div className="profile-dropdown-top">
                        <div> {`Hi, ${user.firstName}!`}</div>
                    </div>
                    <div className="profile-dropdown-buttons">
                        <NavLink 
                            to="/my/Profile"
                            className="link"
                        >My Profile</NavLink>
                        <NavLink 
                            to="/my/Profile"
                            className="link"
                        >My Dining History</NavLink>
                        <NavLink 
                            to="/my/Profile"
                            className="link"
                        >My Saved Restaurants</NavLink>
                        <div id="profile-dropdown-signout" onClick={signout}>
                            Sign out
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileButton;