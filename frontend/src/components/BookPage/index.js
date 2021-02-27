import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { postReservation } from '../../store/reservations'

import './BookPage.css';

const BookPage = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const baseReservation = location?.state?.reservation;
  const restaurant = location?.state?.restaurant;
  const sessionUser = useSelector(state => state?.session?.user)
  const confirmedRes = useSelector(state => state?.reservations?.reservationList[0])

  // States set by the form
  let [occasion, setOccasion] = useState('');
  const [request, setRequest] = useState('');

  if (!baseReservation) {
    return history.push('/')
  }
  const { reservationDate, partySize, reservationTime } = baseReservation;
  const restaurantId = restaurant?.id;
  const userId = sessionUser?.id;

  const occasionList = [
    "Select an occasion (optional)",
    "Birthday",
    "Anniversary",
    "Date Night",
    "Business Meal",
    "Celebration"
  ]


  // section to parse the date object and format it
  const dayNum = reservationDate.getDay();
  const resMonth = reservationDate.getMonth();
  const resYear = reservationDate.getFullYear();
  const resDate = reservationDate.getDate();

  let weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tues";
  weekday[3] = "Wed";
  weekday[4] = "Thurs";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  const outputDay = weekday[dayNum];

  const months = {
    0: "Jan",
    1: "Feb",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "Aug",
    8: "Sept",
    9: "Oct",
    10: "Nov",
    11: "Dec"
  }
  const dispMonth = months[resMonth];

  const formattedDate = `${resMonth + 1}/${resDate}/${resYear}`; // 2/26/2021
  const displayDate = `${outputDay}, ${dispMonth} ${resDate}`; // Fri, Feb 26

  //Handle the reservation
  const bookHandler = async (e) => {
    e.preventDefault();
    if (occasion === "Select an occasion (optional)") occasion = "";
    // handle errors if there is a missing field

    const finalReservation = {
      partySize,
      reservationDate: formattedDate,
      reservationTime,
      restaurantId,
      userId,
      occasion,
      request
    }

    // dispatch reservation to the backend
    await dispatch(postReservation(finalReservation));    
  }

  // alter the content based on confirmation status
  let headerContent = null;
  let bottomContent = null;
  if (confirmedRes) {
    headerContent = (
      <h2>Success!</h2>
    )
    bottomContent = (
      <div className="book-hide-form">
        <div className="hide-form-name">
          {`Reservation name: ${sessionUser.firstName} ${sessionUser.lastName}`}
        </div>
        <div className="hide-form-email">
          {`Contact email: ${sessionUser.email}`}
        </div>
        <div className="hide-form-occasion">
          {`Occasion: ${occasion}`}
        </div>
        <div className="hide-form-request">
          {`Special request: ${request}`}
        </div>
      </div>
    )
  } else {
    headerContent = (
      <h2>You're almost done!</h2>
    )
    bottomContent = (
      <div className="book-show-form">
        <div className="show-form-header">
          <span>Diner details</span>
          <span>{`${sessionUser.firstName} ${sessionUser.lastName}`}</span>
        </div>
        <form className="book-res-form" onSubmit={bookHandler}>
          <div className="book-form-top">
            <input 
              className="book-phone book-form-field"
              placeholder="Phone number"
              />
            <input 
              className="book-email book-form-field"
              value={sessionUser.email}
              readOnly
            />
          </div>
          <div className="book-form-bottom">
            <select
              className="book-form-field" 
              value={occasion}
              onChange={e => setOccasion(e.target.value)}>
              {occasionList.map((occ, idx) => (
                <option key={idx} value={occ}>{occ}</option>
              ))}
            </select>
            <textarea
              className="book-form-field"  
              placeholder="Add a special request (optional)"
              onChange={e => setRequest(e.target.value)}
              value={request}
            />
          </div>
          <button className="book-form-button" type="submit">Complete reservation</button>
        </form>
      </div>
    )
  }

  return (
    <div className="full-book">
      <div className="book-main">
        {headerContent}
        <div className="book-header">
          <div className="book-header-photo">
            <img src={restaurant?.mainImageUrl} />
          </div>
          <div className="book-header-content">
            <div className="book-name">
              {restaurant?.name}
            </div>
            <div className="book-info">
              <div className="book-info-date">
                <i className="far fa-calendar"></i>
                <span>{displayDate}</span>
              </div>
              <div className="book-info-time">
                <i className="far fa-clock"></i>
                <span>{reservationTime}</span>
              </div>
              <div className="book-info-party">
                <i className="far fa-user"></i>
                <span>{partySize}</span>
              </div>
            </div>
          </div>
        </div>
        {bottomContent}
      </div>
      <div className="book-side">
        <h3>What to know before you go</h3>
        <span>Important dining information</span>
        <p>We have a 15 minute grace period. Please call us if you are running 
          later than 15 minutes after your reservation time.
        </p>
        <p>
          We may contact you about this reservation, so please ensure your 
          email and phone number are up to date.
        </p>
      </div>
    </div>
  )
}

export default BookPage;