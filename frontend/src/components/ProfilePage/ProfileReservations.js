import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../store/restaurants';
import { getReservations } from '../../store/reservations';

export default function ProfileReservations({ userId }) {
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

  // gather restaurants
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch])

  const restaurantList = useSelector(state => {
    return state.restaurants.list
  })

  return (
    <div className="profile-section-reservations">
      <div className="reservations-upcoming">
        <h2 className="profile-section-header" id="reservations">Upcoming Reservations</h2>
          {futureResList?.length && restaurantList && futureResList.map(res => {
            const reservRestaurant = restaurantList.find(rest => rest.id === res.restaurantId)
            return (
            <div className="profile-res-block">
              <div className="profile-header-photo">
                <img src={reservRestaurant?.mainImageUrl} />
              </div>
              <div className="profile-header-content">
                <div className="profile-name">
                  {reservRestaurant?.name}
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
          )})}
      </div>
      <div className="reservations-past">
        <h2 className="profile-section-header" id="history">Past Reservations</h2>
        {pastResList?.length && restaurantList && pastResList.map(res => {
          const reservRestaurant = restaurantList.find(rest => rest.id === res.restaurantId)
          return (
            <div className="profile-res-block">
              <div className="profile-header-photo">
                <img src={reservRestaurant?.mainImageUrl} />
              </div>
              <div className="profile-header-content">
                <div className="profile-name">
                  {reservRestaurant?.name}
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
          )
        })}
      </div>
    </div>
  )
}