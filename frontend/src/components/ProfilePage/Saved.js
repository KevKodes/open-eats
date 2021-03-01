import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFavorites } from "../../store/favorites";


export default function ProfileSaved({ userId, restaurantList }) {
  const dispatch = useDispatch();

  // get the saved restaurants
  useEffect(() => {
    dispatch(getFavorites(userId))
  }, [dispatch])
  const savedList = useSelector(state => (
    state.favorites.list
  ));
  console.log('saved list: ', savedList)

  // remove the restaurant from saved list
  const removeHandler = e => {
    const restaurantId = e.target.value;
    console.log(restaurantId);
  }


  // set the content based on if there are saved restaurants
  let savedContent = null;
  if (savedList?.length && restaurantList) {
    savedContent = (
      savedList.map(saved => {
        const restaurant = restaurantList.find(rest => rest.id === saved.restaurantId)
        return (
          <div key={saved.restaurantId} className="saved-rest-block">
            <div className="saved-block-left">
              <div className="saved-header-photo">
                <img src={restaurant?.mainImageUrl} />
              </div>
              <div className="saved-info">
                <div className="saved-rest-name">
                  {restaurant.name}
                </div>
                <div
                  className="remove-restaurant"
                  onClick={removeHandler}
                  value={restaurant?.id}
                >
                  <i className="far fa-bookmark"></i>
                  <span>Remove from saved restaurants</span>
                </div>
                <div className="saved-stars">

                </div>
                <div className="saved-info-bottom">
                  <div className="saved-info-cuisine">
                    {restaurant?.cuisineType}
                  </div>
                  <div className="saved-info-city">
                    {restaurant?.city}
                  </div>
                </div>
              </div>
            </div>
            <div className="saved-block-right">
              <button>
                <NavLink to={`/restaurants/${saved.restaurantId}`}>Reserve Now</NavLink>
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