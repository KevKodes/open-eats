
// action types
const LOAD = 'restaurants/LOAD';
const GET_ONE = 'restaurants/GET_ONE'


// action creators
const load = restaurantList => ({
  type: LOAD,
  restaurantList
})

const getOne = restaurant => ({
  type: GET_ONE,
  restaurant
})


// thunks
export const getRestaurants = () => async (dispatch) => {
  const response = await fetch(`/api/restaurants`);

  if (response.ok) {
    const restaurantList = await response.json();
    dispatch(load(restaurantList));
  }
}

export const getOneRestaurant = (id) => async (dispatch) => {
  const res = await fetch(`/api/restaurants/${id}`)

  if (res.ok) {
    const restaurant = await res.json();
    dispatch(getOne(restaurant))
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
    case GET_ONE: {
      const oneRestaurant = [action.restaurant];
      return {
        ...state,
        list: oneRestaurant
      }
    }
    default:
      return state;
  }
}

export default restaurantReducer;