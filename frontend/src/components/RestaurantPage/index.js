import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getOneRestaurant } from '../../store/restaurants';
import ReservationForm from './ReservationForm';
import RestaurantContent from './RestaurantContent';
import Reviews from './Reviews';
import './RestaurantPage.css';

export default function RestaurantPage() {
  const { restaurantId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const baseReservation = location.state.reservation;

  // get the one restaurant based on id
  useEffect(() => {
    dispatch(getOneRestaurant(restaurantId));
  }, [dispatch])

  const restaurantList = useSelector(state => {
    return state.restaurants.list
  })

  //handler for saving restaurant to favorites
  const saveHandler = e => {
    console.log('add save functionality')
  }

  return (
    <div className='na'>
    {restaurantList.length && restaurantList.map((restaurant, idx) => (
      <div key={idx} className="restaurant-body">
        <div className="restaurant-header">
          <img src={restaurant.mainImageUrl} />
          <div 
          className="save-restaurant"
          onClick={saveHandler}
          >
            <i className="far fa-bookmark"></i>
            <span>Save this restaurant</span>
          </div>
        </div>
        <div className="main-content">
          <RestaurantContent restaurant={restaurant} />
        </div>
        <div className="sidebar">
          <div className="reservation-form">
            <ReservationForm restaurant={restaurant} reservation={baseReservation} />
          </div>
          <div className="extra-info">
            <div className="info-map">
              {/* <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=13-15%20W.%2054th%20St.%20New%20York,%20NY%2010019&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                  </iframe>
                  <a href="https://123movies-to.org"></a>
                  <br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style>
                  <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                  <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style>
                </div>
              </div> */}
              <i className="fas fa-map-marker-alt"></i>
              {restaurant.address}
            </div>
            <div className="info-phone">
              {`Phone: ${restaurant.phone}`}
            </div>
              <div className="info-hours">
                <i className="far fa-clock"></i>
                  <span>Hours of operation</span>
                  <div className="hours">Mon–Thu 12:00 pm–9:00 pm
                    <br/>Saturday 11:00 am–10:00 pm
                    <br/>Sunday 11:00 am–9:00 pm
                    <br/>Friday 12:00 pm–10:00 pm
                  </div>
              </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}