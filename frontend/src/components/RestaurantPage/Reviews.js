import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Reviews.css';

export default function Reviews() {
  const reviews = useSelector(state => state.reviews?.restaurantReviews)


  return (
    <div className="reviews-content">
      <div className="reviews-header">
        <div className="reviews-title">
          <h2>What people are saying</h2>
        </div>
      </div>
      <div className="reviews-body">
        <p>Reviews coming soon.</p>
      </div>
    </div>
  )
}