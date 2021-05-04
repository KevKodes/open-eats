import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import './ReviewBlock.css';

const ReviewBlock = ({ review }) => {
  const sessionUser = useSelector(state => state.session?.user);
  const [reviewer, setReviewer] = useState({ firstName: 'Kevin', lastName: 'Pitzer'})

  // get the user's name that made the review


  // update to have the same number of reviews for a user
  const numReviews = Math.floor(Math.random() * 20) + 2

  return (
    <div className="review-block-wrapper">
      <div className="review-block-header">
        <div className="review-block-initials">
          {reviewer.firstName[0] + reviewer.lastName[0]}
        </div>
        <div className="review-block-username">
          {reviewer.firstName} {reviewer.lastName}
        </div>
        <div className="review-block-location">
          New York Area
        </div>
        <div className="review-block-numReviews">
          <i className="far fa-comment-alt fa-xs"></i>
          {numReviews} reviews
        </div>
      </div>
      <div className="review-block-content">
        <div className="review-block-rating">
          <div className="stars-line">
            <StarRatings
              rating={review.overallRating}
              starRatedColor="#DA3743"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
              name='rating'
            />
          </div>
          <div className="rating-line">
            <div className="rating-line-section">
              <p>Overall</p>
              <div>{review.foodRating}</div>
            </div>
            <div className="rating-line-section rating-line-detail">
              <p>Food</p>
              <div>{review.foodRating}</div>
            </div>
            <div className="rating-line-section rating-line-detail">
              <p>Service</p>
              <div>{review.serviceRating}</div>
            </div>
            <div className="rating-line-section rating-line-detail">
              <p>Ambience</p>
              <div>{review.ambienceRating}</div>
            </div>
          </div>
        </div>
        <p>{review.description}</p>
      </div>
    </div>
  )
}

export default ReviewBlock;