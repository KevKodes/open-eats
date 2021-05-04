import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReviewBlock from './ReviewBlock';
import './Reviews.css';

export default function Reviews() {
  const reviews = useSelector(state => state.reviews?.restaurantReviews)
  console.log('reviews returned to the component: ', reviews)

  return (
    <div className="reviews-content">
      <div className="reviews-title">
        <h2>What people are saying</h2>
      </div>
      <div className="reviews-header">
        <h3>Overall ratings and reviews</h3>
      </div>
      <div className="reviews-body">
        {reviews && reviews.map((review, idx) => (
          <ReviewBlock key={idx} review={review} />
        ))}

      </div>
    </div>
  )
}