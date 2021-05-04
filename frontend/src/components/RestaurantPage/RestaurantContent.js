import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photos';
import { getReviews } from '../../store/reviews';
import PhotoComponent from './PhotoComponent';
import Reviews from './Reviews';
import StarRatings from 'react-star-ratings';
import './RestaurantContent.css'

export default function RestaurantContent({ restaurant }) {
  const restId = restaurant.id;
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews?.restaurantReviews)
  const [numReviews, setNumReviews] = useState(0);
  const [overallRating, setOverallRating] = useState(0)
  const [overallAverage, setOverallAverage] = useState(0); //to set the star component

  useEffect(() => {
    dispatch(getPhotos(restId));
  }, [dispatch])

  useEffect(() => {
    dispatch(getReviews(restId));
  }, [dispatch])

  useEffect(() => {
    if (reviews?.length) {
      let overall = [];
      reviews.forEach(rev => {
        overall.push(rev.overallRating);
      });
      const overallAvg = overall.reduce((acc, cv) => acc + cv) / overall.length;
      setOverallAverage(overallAvg)
      setOverallRating(overallAvg.toFixed(1));
      setNumReviews(reviews.length)
    }

  }, [reviews])

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
          <div className="resContent-reviews-val">
            <StarRatings
              rating={overallAverage}
              starRatedColor="#DA3743"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
              name='rating'
            /> {overallRating}
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