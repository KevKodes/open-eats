import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReviewBlock from './ReviewBlock';
import StarRatings from 'react-star-ratings';
import './Reviews.css';

export default function Reviews() {
  const reviews = useSelector(state => state.reviews?.restaurantReviews)
  const [overallRating, setOverallRating] = useState(5)
  const [foodRating, setFoodRating] = useState(5.0)
  const [serviceRating, setServiceRating] = useState(5.0)
  const [ambienceRating, setAmbienceRating] = useState(5.0)
  console.log('reviews returned to the component: ', reviews)

  useEffect(() => {
    if (reviews?.length) {
      let overall = [];
      let service = [];
      let food = [];
      let ambience = [];
      reviews.forEach(rev => {
        overall.push(rev.overallRating);
        service.push(rev.serviceRating);
        food.push(rev.foodRating);
        ambience.push(rev.ambienceRating);
      });
      const overallAvg = overall.reduce((acc, cv) => acc + cv) / overall.length;
      console.log('average overall rating: ', overallAvg)
      setOverallRating(Math.round(overallAvg * 10) / 10);
      const foodAvg = food.reduce((acc, cv) => acc + cv) / food.length
      console.log('average food rating: ', foodAvg)
      setFoodRating(Math.round(foodAvg * 10) / 10);
    }

  }, [reviews])

  return (
    <div className="reviews-content">
      <div className="reviews-title">
        <h2>What people are saying</h2>
      </div>
      <div className="reviews-header">
        <h3>Overall ratings and reviews</h3>
        <div className="reviews-overall">
          <div className="reviews-overall-stars">

          </div>
          <div className="reviews-overall-val">
            <StarRatings
              rating={overallRating}
              starRatedColor="#DA3743"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
              name='rating'
            /> based on recent reviews
          </div>
        </div>
        <div className="reviews-breakdown">
          <div className="reviews-breakdown-section">
            <div>{foodRating}</div>
            <p>Food</p>
          </div>
          <div className="reviews-breakdown-section service-rating">
            <div>{serviceRating}</div>
            <p>Service</p>
          </div>
          <div className="reviews-breakdown-section">
            <div>{ambienceRating}</div>
            <p>Ambience</p>
          </div>
        </div>
      </div>
      <div className="reviews-body">
        {reviews && reviews.map((review, idx) => (
          <ReviewBlock key={idx} review={review} />
        ))}

      </div>
    </div>
  )
}