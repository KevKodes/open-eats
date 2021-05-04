import React from 'react';
import { getReviews } from '../../store/reviews';
import './Reviews.css';

export default function Reviews({ restId }) {
  const reviews = state.reviews

  useEffect(() => {
    dispatch(getReviews(restId));
  }, [dispatch])

  return (
    <div className="reviews-content">
      <div className="reviews-title">
        <h2>What people are saying</h2>
      </div>
      <div className="reviews-body">
        <p>Reviews coming soon.</p>
      </div>
    </div>
  )
}