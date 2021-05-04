import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photos';
import { getReviews } from '../../store/reviews';
import PhotoComponent from './PhotoComponent';
import Reviews from './Reviews';
import './RestaurantContent.css'

export default function RestaurantContent({ restaurant }) {
  const restId = restaurant.id;
  const dispatch = useDispatch();
  const [numReviews, setNumReviews] = useState(20)

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 30)
    setNumReviews(randomNum)
  }, [])

  useEffect(() => {
    dispatch(getPhotos(restId));
  }, [dispatch])

  useEffect(() => {
    dispatch(getReviews(restId));
  }, [dispatch])

  const photoList = useSelector(state => {
    return state.photos.photoList;
  })

  const numPhotos = photoList.length;

  const overviewClick = () => {
    document.getElementById('overview').scrollIntoView({
      behavior: "smooth"
    });
  }
  const photosClick = () => {
    document.getElementById('photos').scrollIntoView({
      behavior: "smooth"
    });
  }
  const reviewsClick = () => {
    document.getElementById('reviews').scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <div className="resContent-body">
      <div className="resContent-header">
        <a onClick={overviewClick}>Overview</a>
        <a onClick={photosClick}>Photos</a>
        {/* <a href="#menu">Menu</a> */}
        <a onClick={reviewsClick}>Reviews</a>
      </div>
      <div className="resContent-name" id="overview">
        {restaurant.name}
      </div>
      <div className="resContent-info">
        <div className="resContent-reviews">
          <div className="resContent-review-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </div>
          <i className="far fa-comment-alt"></i>
          <p>{`${numReviews} reviews`}</p>
        </div>
        <div className="resContent-cuisine">
          <i className="fas fa-utensils"></i>
          {restaurant.cuisineType}
        </div>
      </div>
      <div className="resContent-description">
        {restaurant.description}
      </div>
      <div className="resContent-photos" id="photos">
        <h2>{`${numPhotos} Photos`}</h2>
        <div className="resContent-photolist">
          {photoList.length && photoList.map((photo, idx) => (
            <PhotoComponent photo={photo} key={idx} />
            ))}
        </div>
      </div>
      <div className="reviews" id="reviews">
        <Reviews />
      </div>
    </div>
  )
}