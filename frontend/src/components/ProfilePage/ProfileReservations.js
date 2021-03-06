import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../../store/reservations';
import { cancelReservation } from '../../store/reservations';
import { NavLink } from 'react-router-dom';

export default function ProfileReservations({ userId, restaurantList }) {
  const dispatch = useDispatch();

  //get the reservations and sort into past and future
  useEffect(() => {
    dispatch(getReservations(userId))
  }, [dispatch])

  //sort the reservation into future and past
  let futureResList = [];
  let pastResList = [];
  const today = new Date();
  const ResList = useSelector(state => (
    state.reservations.reservationList
  ))
  ResList?.forEach(res => {
    //format the display time
    if (!(res.reservationTime.includes('AM') || res.reservationTime.includes('PM'))) {
      let roughTimeArr = res.reservationTime.split(':')
      if (roughTimeArr[0] > 12) {
        roughTimeArr[0] = roughTimeArr[0] - 12;
        roughTimeArr.length = 2
        res.reservationTime = roughTimeArr.join(':') + ' PM'
      } else {
        roughTimeArr.length = 2
        res.reservationTime = roughTimeArr.join(':') + ' AM'
      }
    }
    let resDate = res.reservationDate;
    if (typeof resDate !== "object") resDate = new Date(resDate)
    if (today.getTime() <= resDate.getTime()) {
      futureResList.push(res)
    } else {
      pastResList.push(res)
    }
  })

  // cancel reservations click handler
  const cancelReservationHandler = (e) => {
    dispatch(cancelReservation(e.target.value))
  }

  // set the reservations sections to show 'no reservations' or the reservations list
  let upcomingBlock = null;
  if (futureResList?.length && restaurantList) {
    upcomingBlock = (
      futureResList.map((res) => {
        const reservRestaurant = restaurantList.find(rest => rest.id === res.restaurantId)
        return (
          <div key={res.id} className="profile-res-block">
            <div className="profile-block-left">
              <div className="profile-header-photo">
                <img src={reservRestaurant?.mainImageUrl} />
              </div>
              <div className="profile-header-content">
                <div className="profile-name">
                  <a href={`/restaurants/${res.restaurantId}`}>{reservRestaurant?.name}</a>
                </div>
                <div className="profile-info">
                  <div className="profile-info-date">
                    <i className="far fa-calendar"></i>
                    <span>{res.reservationDate}</span>
                  </div>
                  <div className="profile-info-time">
                    <i className="far fa-clock"></i>
                    {res.reservationTime && (
                      <span className="profile-dis-time">
                        {res.reservationTime}
                      </span>
                    )}
                  </div>
                  <div className="profile-info-party">
                    <i className="far fa-user"></i>
                    <span>{res.partySize}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-block-button">
              <button
                onClick={cancelReservationHandler}
                value={res.id}>
                Cancel Reservation
                  </button>
            </div>
          </div>
        )
      })
    )
  } else {
    upcomingBlock = (
      <p className="profile-block-none">No Upcoming Reservations 
        <NavLink className="link" to='/'>Book a Table.</NavLink>
      </p>
    )
  }

  // set the history section to show 'no history' or the history list
  let historyBlock = null;
  if (pastResList?.length && restaurantList) {
    historyBlock = (
      pastResList.map(res => {
      const reservRestaurant = restaurantList.find(rest => rest.id === res.restaurantId)
      return (
        <div key={res.id} className="profile-res-block">
          <div className="profile-block-left">
            <div className="profile-header-photo">
              <img src={reservRestaurant?.mainImageUrl} />
            </div>
            <div className="profile-header-content">
              <div className="profile-name">
                <a href={`/restaurants/${res.restaurantId}`}>{reservRestaurant?.name}</a>
              </div>
              <div className="profile-info">
                <div className="profile-info-date">
                  <i className="far fa-calendar"></i>
                  <span>{res.reservationDate}</span>
                </div>
                <div className="profile-info-time">
                  <i className="far fa-clock"></i>
                  {res.reservationTime && (
                    <span className="profile-dis-time">
                      {res.reservationTime}
                    </span>
                  )}
                </div>
                <div className="profile-info-party">
                  <i className="far fa-user"></i>
                  <span>{res.partySize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    )
  } else {
    historyBlock = (
      <p className="profile-block-none">
        No Past Reservations
      </p>
    )
  }

  return (
    <div className="profile-section-reservations">
      <div className="reservations-upcoming">
        <h2 className="profile-section-header" id="reservations">Upcoming Reservations</h2>
          {upcomingBlock}
      </div>
      <div className="reservations-past">
        <h2 className="profile-section-header" id="history">Dining History</h2>
        {historyBlock}
      </div>
    </div>
  )
}