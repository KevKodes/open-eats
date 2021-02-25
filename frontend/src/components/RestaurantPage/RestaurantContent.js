import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photos';
import PhotoComponent from './PhotoComponent';
import Reviews from './Reviews';
import './RestaurantContent.css'

export default function RestaurantContent({ restaurant }) {
  const restId = restaurant.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos(restId));
  }, [dispatch])

  const photoList = useSelector(state => {
    return state.photos.photoList;
  })

  const numPhotos = photoList.length;

  return (
    <div className="resContent-body">
      <div className="resContent-header">
        <a>Overview</a>
        <a>Photos</a>
        <a>Menu</a>
        <a>Reviews</a>
      </div>
      <div className="resContent-name">
        {restaurant.name}
      </div>
      <div className="resContent-info">
        <i className="fas fa-utensils"></i>
        {restaurant.cuisineType}
      </div>
      <div className="resContent-description">
        {restaurant.description}
      </div>
      <div className="resContent-photos">
        <h2>{`${numPhotos} Photos`}</h2>
        {photoList.length && photoList.map((photo, idx) => (
          <PhotoComponent photo={photo} key={idx} />
        ))}
      </div>
      <div className="reviews">
        <Reviews />
      </div>
    </div>
  )
}