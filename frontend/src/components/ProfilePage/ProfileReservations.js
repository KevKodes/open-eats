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
  const futureResList = useSelector(state => (
    state.reservations.reservationList
  ))
  console.log('future reservations: ', futureResList)

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
          {futureResList?.length && futureResList.map(res => {
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
                    <span>{res.reservationTime}</span>
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

      </div>
    </div>
  )
}