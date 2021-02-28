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
    state.reservations
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
        <h2 className="profile-section-header">Upcoming Reservations</h2>
          {futureResList?.length && futureResList.map(res => (
            <div className="res-date">{res.reservationDate}</div>
          ))}
      </div>
      <div className="reservations-past">
        <h2 className="profile-section-header">Past Reservations</h2>

      </div>
    </div>
  )
}