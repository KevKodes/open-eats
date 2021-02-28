import { useSelector } from "react-redux";

import ProfileReservations from './ProfileReservations';
import ProfileSaved from './Saved';
import './ProfilePage.css';

export default function ProfilePage() {
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

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>{sessionUser?.firstName} {sessionUser?.lastName}</h1>
      </div>
      <div className="profile-body">
        <div className="profile-nav">
          <a onClick={reservationsClick}>Reservations</a>
          <a onClick={savedClick}>Saved Restaurants</a>
          <a onClick={historyClick}>Dining History</a>
        </div>
        <div className="profile-content">
          <ProfileReservations userId={sessionUser?.id} />
          <ProfileSaved />
        </div>
      </div>
    </div>
  )
}