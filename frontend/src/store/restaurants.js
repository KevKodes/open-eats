
// action types
const LOAD = 'restaurants/LOAD';


// action creators
const load = restaurantList => ({
  type: LOAD,
  restaurantList
})


// thunks
export const getRestaurants = () => async (dispatch) => {
  const response = await fetch(`/api/restaurants`);

  if (response.ok) {
    const restaurantList = await response.json();
    dispatch(load(restaurantList));
  }
}


// Reducer
const initialState = {
  list: []
}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allRestaurants = [];
      action.restaurantList.forEach(rest => {
        allRestaurants.push(rest)
      });
      return {
        // ...allRestaurants,
        ...state,
        list: allRestaurants
      }
    }
    default:
      return state;
  }
}

export default restaurantReducer;