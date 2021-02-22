import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import NotificationsButton from './NotificationsButton';
import ReservationsButton from './ReservationsButton';
import SearchButton from './SearchButton';
import LoginFormModal from '../LoginFormModal';
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
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <ul>
            <li>
                <NavLink exact to="/">
                    <i className="fab fa-erlang"></i>
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