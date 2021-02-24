import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { getPhotos } from '../../store/photos'

import './RestaurantContent.css'

export default function RestaurantContent({ restaurant }) {
  const restId = restaurant.id;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPhotos(restId));
  // }, [dispatch])

  return (
    <div className="restContent-body">
      <div className="restContent-header">
        <a>Overview</a>
        <a>Photos</a>
        <a>Menu</a>
        <a>Reviews</a>
      </div>
      <div className="resContent-name">
        {restaurant.name}
      </div>
      <div className="resContent-info">
        {restaurant.cuisineType}
      </div>
      <div className="resContent-description">
        {restaurant.description}
      </div>
      <div className="resContent-photos">
        
      </div>
    </div>
  )
}