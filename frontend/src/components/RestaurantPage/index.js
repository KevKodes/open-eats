import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneRestaurant } from '../../store/restaurants';
import ReservationForm from './ReservationForm';
import RestaurantContent from './RestaurantContent';

import './RestaurantPage.css';

export default function RestaurantPage() {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  // get the one restaurant based on id
  useEffect(() => {
    dispatch(getOneRestaurant(restaurantId));
  }, [dispatch])

  const restaurantList = useSelector(state => {
    return state.restaurants.list
  })

  console.log('restaurant in page component: ', restaurantList)

  return (
    <>
    {restaurantList.length && restaurantList.map((restaurant, idx) => (
      <div key={idx} className="restaurant-body">
        <div className="restaurant-header">
          <img src={restaurant.mainImageUrl} />
          <div className="add-restaurant">
            <i className="far fa-bookmark"></i>
            <button>Save this restaurant</button>
          </div>
        </div>
        <div className="main-content">
          <RestaurantContent restaurant={restaurant} />
        </div>
        <div className="sidebar">
          <div className="reservation-form">
            <ReservationForm restaurant={restaurant} />
          </div>
          <div className="extra-info">

          </div>
        </div>
        <div className="reviews">

        </div>
      </div>
      ))}
    </>
  )
}