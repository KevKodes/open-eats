import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import NotificationsButton from './NotificationsButton';
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
				{/* <NotificationsButton /> */}
			</div>
		);
	} else {
		sessionLinks = (
			<>
			<SignupFormModal />
			<LoginFormModal />
			</>
		);
	}

	return (
		<div className="nav-bar">
			<div className="nav-left">
				<NavLink className="home-links" exact to="/">
						<i className="fab fa-erlang fa-2x"></i>
						<h2 className="nav-title">OpenEats</h2>
				</NavLink>
			</div>
			<div className="nav-right">
				<div className="session-buttons">
					{isLoaded && sessionLinks}
				</div>
				<div className="nav-search">
					<SearchButton />
				</div>
			</div>
		</div>
	);
}

export default Navigation;