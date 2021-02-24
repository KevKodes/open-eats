import React from 'react';
import './RestaurantCard.css'

export default function RestaurantCard({ restaurant }) {
  const { id, name, mainImageUrl, cuisineType, city } = restaurant;
  const numReviews = Math.floor(Math.random() * 100 + 10);
  const numBookings = Math.floor(Math.random() * 30)

  return (
    <a href={`/restaurants/${id}`} className='full-card'>
      <div className='card-image'>
        <img src={mainImageUrl} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <div className="reviews">
          <div className="review-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </div>
          <p>{`${numReviews} reviews`}</p>
        </div>
        <div className="extra-info">
          <p className="cuisine">{cuisineType}</p>
          <p>{city}</p>
        </div>
        <div className="bookings">
          <i className="fas fa-chart-line"></i>
          <p>{`Booked ${numBookings} times today`}</p>
        </div>
      </div>
    </a>
  )
}