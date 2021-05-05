import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import StarPicker from 'react-star-picker';
import './ReviewForm.css';

export default function Reviewform() {
  const { restaurantId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const [overviewRating, setOverviewRating] = useState(null)
  const [serviceRating, setServiceRating] = useState(null)
  const [foodRating, setFoodRating] = useState(null)
  const [ambienceRating, setAmbienceRating] = useState(null)
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState([])

  useEffect(() => {
    setErrors([])
  }, [overviewRating, serviceRating, foodRating, ambienceRating])

  const handleSubmit = (e) => {
    e.preventDefault();
    // need the userId and the restaurantId
    const review = {
      overall: overviewRating,
      food: foodRating,
      service: serviceRating,
      ambience: ambienceRating
    }
    // console.log('review: ', review)

    let checkErrors = [];
    Object.keys(review).forEach(key => {
      if (!review[key]) {
        checkErrors.push(`Please add a rating for the "${key}" category`)
      }
    })

    if (checkErrors.length) {
      setErrors(checkErrors)
    } else {
      // dispatch the review post
      review.description = description;
      review.userId = sessionUser.id;
      review.restaurantId = restaurantId;
      console.log('dispatch review post: ', review)

      // return <Redirect to={`/restaurants/${restaurantId}`} />;
    }
  }

  return (
    <div className="review-modal-wrapper">
      <h1>Add a Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-ratings">
          <div className="rating-form-section">
            <h3>Overall</h3>
            <StarPicker
              onChange={value => setOverviewRating(value)}
              value={overviewRating}
              numberStars={5}
            />
          </div>
          <div className="rating-form-section">
            <h3>Food</h3>
            <StarPicker
              onChange={value => setFoodRating(value)}
              value={foodRating}
              numberStars={5}
            />
          </div>
          <div className="rating-form-section">
            <h3>Service</h3>
            <StarPicker
              onChange={value => setServiceRating(value)}
              value={serviceRating}
              numberStars={5}
            />
          </div>
          <div className="rating-form-section">
            <h3>Ambience</h3>
            <StarPicker
              onChange={value => setAmbienceRating(value)}
              value={ambienceRating}
              numberStars={5}
            />
          </div>
        </div>
        <textarea
          className="review-description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="How was your dining experience? (Optional)"  
        />
        <ul className='review-form-errors'>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <button className="review-form-button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}