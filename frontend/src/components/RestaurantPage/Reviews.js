import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReviewBlock from './ReviewBlock';
import StarRatings from 'react-star-ratings';
import './Reviews.css';

export default function Reviews() {
  const reviews = useSelector(state => state.reviews?.restaurantReviews)
  const sessionUser = useSelector(state => state.session?.user);
  const [overallRating, setOverallRating] = useState(0)
  const [overallAverage, setOverallAverage] = useState(0); //to set the star component
  const [foodRating, setFoodRating] = useState(0)
  const [serviceRating, setServiceRating] = useState(0)
  const [ambienceRating, setAmbienceRating] = useState(0)
  const [errors, setErrors] = useState([])
  // console.log('reviews returned to the component: ', reviews)

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
      setOverallAverage(overallAvg)
      setOverallRating(overallAvg.toFixed(1));

      const foodAvg = food.reduce((acc, cv) => acc + cv) / food.length
      setFoodRating(foodAvg.toFixed(1));

      const serviceAvg = service.reduce((acc, cv) => acc + cv) / service.length
      setServiceRating(serviceAvg.toFixed(1));

      const ambienceAvg = ambience.reduce((acc, cv) => acc + cv) / ambience.length
      setAmbienceRating(ambienceAvg.toFixed(1));
    }

  }, [reviews])

  const addReview = () => {
    if (!sessionUser) {
      setErrors(['Please sign in to submit a review'])
    } else {
      console.log('open the review modal')

    }
  }

  return (
    <div className="reviews-content">
      <div className="reviews-title">
        <h2>What people are saying</h2>
      </div>
      { reviews?.length ? (
        <div className="reviews-header">
          <h3>Overall ratings and reviews</h3>
          <div className="reviews-overall">
            <div className="reviews-overall-stars">

            </div>
            <div className="reviews-overall-val">
              <StarRatings
                rating={overallAverage}
                starRatedColor="#DA3743"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
                name='rating'
              /> {overallRating} based on recent reviews
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
          <div className="reviews-recommendation">
            <i className="fas fa-volume-up"></i>
            <p>Moderate noise</p>
          </div>
          <div className="reviews-recommendation">
            <i className="far fa-thumbs-up fa-xs"></i>
            <p><strong>95% of people</strong> would recommend it to a friend</p>
          </div>
        </div>
      ) : (
        <h3 className="review-header-bottom">Be the first to review this restaurant!</h3>
      )}
        <div className="review-header-bottom">
          <ul className='res-form-errors'>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="add-review">
            <button onClick={addReview}>Add a Review</button>
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