import { csrfFetch } from "./csrf";

const LOAD = 'reviews/LOAD';
const POST_ONE = 'reviews/POST_ONE'

const load = reviews => ({
  type: LOAD,
  reviews
})

const post = review => ({
  type: POST_ONE,
  review
})

export const getReviews = restId => async (dispatch) => {
  const response = await fetch(`/api/reviews/${restId}`)
  
  if (response.ok) {
    const reviewList = await response.json();
    dispatch(load(reviewList));
  }
}

export const postReview = review => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  })

  if (res.ok) {
    const postedReview = await res.json();
    console.log('posted review back in the thunk: ', postedReview)
    dispatch(post(postedReview))
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
    case POST_ONE: {
      const updatedReviews = [action.review, ...state.restaurantReviews]
      const addedRes = {
        ...state,
        restaurantReviews: updatedReviews
      }
      return addedRes
    }
    default:
      return state;
  }
}

export default reviewsReducer;