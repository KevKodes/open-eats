import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from '../../store/restaurants';
import ProfileReservations from './ProfileReservations';
import ProfileSaved from './Saved';
import './ProfilePage.css';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  //Scroll Navigation
  const reservationsClick = () => {
    document.getElementById('reservations').scrollIntoView({
      behavior: "smooth"
    });
  }
  const savedClick = () => {
    document.getElementById('saved').scrollIntoView({
      behavior: "smooth"
    });
  }
  const historyClick = () => {
    document.getElementById('history').scrollIntoView({
      behavior: "smooth"
    });
  }

  // gather restaurants
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch])

  const restaurantList = useSelector(state => {
    return state.restaurants.list
  })

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>{sessionUser?.firstName} {sessionUser?.lastName}</h1>
      </div>
      <div className="profile-body">
        <div className="profile-nav">
          <a onClick={reservationsClick}>Upcoming Reservations</a>
          <a onClick={historyClick}>Dining History</a>
          <a onClick={savedClick}>Saved Restaurants</a>
        </div>
        <div className="profile-content">
          <ProfileReservations userId={sessionUser?.id} restaurantList={restaurantList} />
          <ProfileSaved restaurantList={restaurantList} userId={sessionUser?.id} />
        </div>
      </div>
    </div>
  )
}