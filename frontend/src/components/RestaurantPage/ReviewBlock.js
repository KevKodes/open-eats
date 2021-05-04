import React from 'react';

const ReviewBlock = ({ review }) => {

  return (
    <div className="review-block-wrapper">
      <p>{review.description}</p>
    </div>
  )
}

export default ReviewBlock;