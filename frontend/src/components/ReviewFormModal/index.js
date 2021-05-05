import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';
import '../RestaurantPage/Reviews.css';

export default function ReviewFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState([])
  const sessionUser = useSelector(state => state.session?.user);
  const reviews = useSelector(state => state.reviews?.restaurantReviews)

  useEffect(() => {
    setErrors([])
  }, [sessionUser])

  useEffect(() => {
    setShowModal(false)
  }, [reviews])

  const addReview = () => {
    if (!sessionUser) {
      setErrors(['Please sign in to submit a review'])
    } else {
      setErrors([])
      setShowModal(true)
    }
  }

  return (
    <div className="review-button-wrapper">
      <ul className='res-form-errors'>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className="add-review">
        <button
          onClick={addReview}
        >Add a Review</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm />
        </Modal>
      )}
    </div>
  );
}
