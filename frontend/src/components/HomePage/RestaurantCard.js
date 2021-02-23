import React from 'react';

export default function RestaurantCard({ restaurant }) {
  console.log(restaurant)

  return (
    // <p>each restaurant</p>
    <p>{restaurant.name}</p>
  )
}