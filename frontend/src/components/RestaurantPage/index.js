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

  return (
    <div className='na'>
    {restaurantList.length && restaurantList.map((restaurant, idx) => (
      <div key={idx} className="restaurant-body">
        <div className="restaurant-header">
          <img src={restaurant.mainImageUrl} />
          <div className="save-restaurant">
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
            <div className="info-address">
              {restaurant.address}
            </div>
            <div className="info-phone">
              {restaurant.phone}
            </div>
          </div>
        </div>
        <div className="reviews">
          <p>add a reviews component in index.js</p>
        </div>
      </div>
      ))}
    </div>
  )
}