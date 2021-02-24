import React from 'react';
import { useParams } from 'react-router-dom';

export default function RestaurantPage() {
  const { restaurantId } = useParams();

  

  return (
    <div className="restaurant-body">
      <h1>Hello from restaurant page</h1>

    </div>
  )
}