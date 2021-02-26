import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './BookPage.css';

const BookPage = () => {
  const location = useLocation();
  const baseReservation = location.state.reservation;
  const sessionUser = useSelector(state => state.session.user)
  const { reservationDate, partySize, reservationTime } = baseReservation;
  const restaurant = useSelector(state => state.restaurants.list[0])

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
  const bookHandler = () => {
    const finalReservation = {
      partySize,
      reservationDate,
      reservationTime,
      
    }
  }
  
  // need to add some logic to make sure there is a user and restaurant so the page
  //   does not break. Particularly on refresh
  //   also maybe store the info to localstorage?

  return (
    <>
      <div className="book-header">
        <div className="book-header-photo">
          {restaurant?.mainImageUrl}
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
      <span>Diner details</span>
      <span>{`${sessionUser.firstName} ${sessionUser.lastName}`}</span>
      <form className="book-res-form" onSubmit={bookHandler}>

      </form>
    </>
  )
}

export default BookPage;