const LOAD = 'reviews/LOAD';

const load = reviews => ({
  type: LOAD,
  reviews
})

export const getReviews = restId => async (dispatch) => {
  const response = await fetch(`/api/reviews/${restId}`)
  
  if (response.ok) {
    const reviewList = await response.json();
    dispatch(load(reviewList));
  }
}

const initialState = {}
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const restReviews = [];
      action.reviews.forEach(review => {
        restReviews.push(review)
      })
      return {
        ...state,
        restaurantReviews: restReviews
      }
    }
    default:
      return state;
  }
}

export default reviewsReducer;