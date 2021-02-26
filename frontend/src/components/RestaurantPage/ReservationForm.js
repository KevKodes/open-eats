import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './ReservationForm.css'

//opportunity to update times based on the current time
const TIMES = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM", 
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
];

const PARTYSIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function ReservationForm({ restaurant }) {
  const numBookings = Math.floor(Math.random() * 30)
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const restaurantId = restaurant.id;
  const [partySize, setPartySize] = useState(2);
  const [reservationDate, setReservationDate] = useState(new Date());
  const [reservationTime, setReservationTime] = useState('7:00 pm');
  const history = useHistory();

  const reservationHandler = e => {
    e.preventDefault();
    const initialReservation = {
      partySize,
      reservationDate,
      reservationTime,
      userId,
      restaurantId
    }
    console.log(initialReservation);
    //redirect to the reservation page with the initial reservation 
    // need to give the opportunity for occasion and request
    // return <Redirect to={{
    //     pathname: "/book",
    //     state: { reservation: initialReservation }
    //   }}
    // />
    // if (userId) {
      
    // }

    history.push({
      pathname: "/book",
      state: { reservation: initialReservation }
    })
  }

  return (
    <div className="res-block">
      <h2 className="res-form-title">
        Make a reservation
      </h2>
      <form className="res-form" onSubmit={reservationHandler}>
        <div className="form-top">
          <p>Party Size</p>
          <select
            value={partySize}
            onChange={e => setPartySize(e.target.value)}>
            {PARTYSIZES.map(num => (
              <option key={num} value={num}>{`For ${num}`}</option>
            ))}
          </select>
        </div>
        <div className="form-bottom">
          <div className="bottom-input">
            <p>Date</p>
            <DatePicker 
              selected={reservationDate} 
              onChange={date => setReservationDate(date)}
            />
          </div>
          <div className="bottom-input">
            <p>Time</p>
            <select 
            value={reservationTime}
            onChange={e => setReservationTime(e.target.value)}>
              {TIMES.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
        <button 
          className='res-form-button'
          type="submit"
        >Find a table</button>
      </form>
      <div className="bookings">
        <i className="fas fa-chart-line"></i>
        <p>{`Booked ${numBookings} times today`}</p>
      </div>
    </div>
  )
}