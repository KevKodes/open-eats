import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFavorites } from "../../store/favorites";
import { removeFavorite } from '../../store/favorites';

export default function ProfileSaved({ userId, restaurantList }) {
  const dispatch = useDispatch();

  // get the saved restaurants
  useEffect(() => {
    dispatch(getFavorites(userId))
  }, [dispatch])
  const savedList = useSelector(state => (
    state.favorites.list
  ));

  // remove the restaurant from saved list
  const removeHandler = e => {
    const restId = e.target.id;
    dispatch(removeFavorite(restId, userId))
  }


  // set the content based on if there are saved restaurants
  let savedContent = null;
  if (savedList?.length && restaurantList) {
    savedContent = (
      savedList.map(saved => {
        const restaurant = restaurantList.find(rest => rest.id === saved.restaurantId)
        const restaurantId = parseInt(restaurant.id);
        return (
          <div key={saved.restaurantId} className="profile-res-block">
            <div className="profile-block-left">
              <div className="profile-header-photo">
                <img src={restaurant.mainImageUrl} />
              </div>
              <div className="saved-info">
                <div className="saved-rest-name">
                  <a href={`/restaurants/${restaurantId}`}>{restaurant.name}</a>
                </div>
                <button
                  className="remove-restaurant"
                  onClick={removeHandler}
                  id={restaurantId}
                >
                  <i id={restaurantId} className="far fa-bookmark"></i>
                  <span id={restaurantId}>Remove from saved restaurants</span>
                </button>
                <div className="saved-stars">

                </div>
                <div className="saved-info-bottom">
                  <div className="saved-info-cuisine">
                    {restaurant.cuisineType}
                  </div>
                  <div className="saved-info-city">
                    {restaurant.city}
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-block-button">
              <button>
                <NavLink 
                  to={`/restaurants/${saved.restaurantId}`}
                  className="link">Reserve Now</NavLink>
              </button>
            </div>

          </div>
        )
    })
    )

  } else {
    savedContent = (
      <p className="profile-block-none">
        You have no favorite restaurants to show on this list.
      </p>
    )
  }

  return (
    <div className="profile-section-saved">
        <h2 className="profile-section-header" id="saved">Saved Restaurants</h2>
        {savedContent}
    </div>
  )
}