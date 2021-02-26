import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import './BookPage.css';

const BookPage = () => {
  const location = useLocation();
  const baseReservation = location.state.reservation;
  const sessionUser = useSelector(state => state.session.user)
  const { reservationDate, partySize, reservationTime } = baseReservation;
  console.log(reservationDate.getDay())
  // grab the restaurant photo from the state somehow to avoid another query
  // also need the restaurant name

  // need to grab the user email to prepopulate the form

  return (
    <>
      <div className="book-header">
        <div className="book-header-photo">
          photo
        </div>
        <div className="book-header-content">
          <div className="book-name">
            restaurant name
          </div>
          <div className="book-info">
            <div className="book-info-date">
              calendar icon
              {/* <span>{reservationDate}</span> */}
            </div>
            <div className="book-info-time">
              clock icon
              <span>{reservationTime}</span>
            </div>
            <div className="book-info-party">
              user icon
              <span>{partySize}</span>
            </div>
          </div>
        </div>
      </div>
      <span>Diner details</span>
      <span>{`${sessionUser.firstName} ${sessionUser.lastName}`}</span>

    </>
  )
}

export default BookPage;