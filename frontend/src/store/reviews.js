import { csrfFetch } from "./csrf";

const LOAD = 'reviews/LOAD';
const POST_ONE = 'reviews/POST_ONE';
const EDIT = 'reviews/EDIT';
const DELETE = 'reviews/DELETE';

const load = reviews => ({
  type: LOAD,
  reviews
})

const post = review => ({
  type: POST_ONE,
  review
})

const deleteRev = reviewId => ({
  type: DELETE,
  reviewId
})

const editRev = review => ({
  type: EDIT,
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
    // console.log('posted review back in the thunk: ', postedReview)
    dispatch(post(postedReview))
  }
}

export const deleteReview = reviewId => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    dispatch(deleteRev(reviewId))
  }
}

export const editReview = review => async (dispatch) => {
  // console.log('the review to edit in the thunk is: ', review)
  const res = await csrfFetch('/api/reviews/', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  })

  if (res.ok) {
    const updatedReview = res.json();
    dispatch(editRev(updatedReview));
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
    case DELETE: {
      const updatedReviews = [...state.restaurantReviews].filter(review => {
        return parseInt(review.id) !== parseInt(action.reviewId)
      })
      return {
        ...state,
        restaurantReviews: [...updatedReviews]
      }
    }
    case EDIT: {
      console.log('updating the state: ', action.review);
      return {
        ...state
      }
    }
    default:
      return state;
  }
}

export default reviewsReducer;