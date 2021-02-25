import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './ReservationForm.css'

export default function ReservationForm({ restaurant }) {
  const numBookings = Math.floor(Math.random() * 30)
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [partySize, setPartySize] = useState(0);
  const [reservationDate, setReservationDate] = useState(new Date());
  const [reservationTime, setReservationTime] = useState('');

  const reservationHandler = () => {

  }

  return (
    <div className="res-block">
      <h2 className="res-form-title">
        Make a reservation
      </h2>
      <form className="res-form">
        <div className="form-top">
          <p>Party Size</p>
          <select>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
            <option value="5">5 people</option>
          </select>
        </div>
        <div className="form-bottom">
          <div className="bottom-input">
            <p>Date</p>
            {/* <input type="date" value="2021-02-24" /> */}
            <DatePicker selected={reservationDate} onChange={date => setReservationDate(date)} />
          </div>
          <div className="bottom-input">
            <p>Time</p>
            <select>
              <option value="8">8:00 AM</option>
              <option value="9">9:00 AM</option>
              <option value="10">10:00 AM</option>
              <option value="11">11:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="13">1:00 PM</option>
              <option value="14">2:00 PM</option>
              <option value="15">3:00 PM</option>
              <option value="16">4:00 PM</option>
              <option value="17">5:00 PM</option>
              <option value="18">6:00 PM</option>
              <option value="19">7:00 PM</option>
              <option value="20" selected="">8:00 PM</option>
              <option value="21">9:00 PM</option>
              <option value="22">10:00 PM</option>
              <option value="23">11:00 PM</option>
            </select>
          </div>
        </div>
        <button 
          className='res-form-button'
          type="submit"
          onSubmit={reservationHandler}
        >Find a table</button>
      </form>
      <div className="bookings">
        <i className="fas fa-chart-line"></i>
        <p>{`Booked ${numBookings} times today`}</p>
      </div>
    </div>
  )
}