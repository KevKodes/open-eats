import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import NotificationsButton from './NotificationsButton';
import ReservationsButton from './ReservationsButton';
import SearchButton from './SearchButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className="user-buttons">
                <ProfileButton user={sessionUser} />
                <ReservationsButton />
                <NotificationsButton />
            </div>
        );
    } else {
        sessionLinks = (
            <>
                {/* <NavLink to="/login">Log In</NavLink> */}
                {/* <NavLink to="/signup">Sign Up</NavLink> */}
                <SignupFormModal />
                <LoginFormModal />
            </>
        );
    }

    return (
        <ul>
            <li>
                <NavLink exact to="/">
                    <i className="fab fa-erlang"></i>
                    <h2 className="nav-title">OpenEats</h2>
                </NavLink>
            </li>
            <li>
                {isLoaded && sessionLinks}

            </li>
            <li>
                <SearchButton />
            </li>
        </ul>
    );
}

export default Navigation;