import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postReservation } from '../../store/reservations'

import './BookPage.css';

const BookPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const baseReservation = location.state.reservation;
  const restaurant = location.state.restaurant;
  const sessionUser = useSelector(state => state.session.user)
  const confirmedRes = useSelector(state => state?.reservations?.reservationList[0])
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

  // States set by the form
  let [occasion, setOccasion] = useState('');
  const [request, setRequest] = useState('');

  // section to parse the date object and format it
  const dayNum = reservationDate.getDay();
  const resMonth = reservationDate.getMonth();
  const resYear = reservationDate.getFullYear();
  const resDate = reservationDate.getDate();

  let weekday = new Array(7);
  weekday[0] = "Mon";
  weekday[1] = "Tues";
  weekday[2] = "Wed";
  weekday[3] = "Thurs";
  weekday[4] = "Fri";
  weekday[5] = "Sat";
  weekday[6] = "Sun";
  const outputDay = weekday[dayNum];

  const months = {
    1: "Jan",
    2: "Feb",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec"
  }
  const dispMonth = months[resMonth];

  const formattedDate = `${resMonth}/${resDate}/${resYear}`; // 2/26/2021
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
      </div>
    )
  } else {
    headerContent = (
      <h2>You're almost done!</h2>
    )
    bottomContent = (
      <div className="book-show-form">
        <span>Diner details</span>
        <span>{`${sessionUser.firstName} ${sessionUser.lastName}`}</span>
        <form className="book-res-form" onSubmit={bookHandler}>
          <div className="book-form-top">
            <input 
              className="book-phone"
              placeholder="Phone number"
              />
            <input 
              className="book-email"
              value={sessionUser.email}
              readOnly
            />
          </div>
          <div className="book-form-bottom">
            <select
              value={occasion}
              onChange={e => setOccasion(e.target.value)}>
              {occasionList.map((occ, idx) => (
                <option key={idx} value={occ}>{occ}</option>
              ))}
            </select>
            <textarea 
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
    <>
      <div className="book-header">
        {headerContent}
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
    </>
  )
}

export default BookPage;