import { csrfFetch } from "./csrf";


// action types
const POST_ONE = 'reservations/POST_ONE';
const LOAD = 'reservations/LOAD';


//action creators
const post = reservation => ({
  type: POST_ONE,
  reservation
})

const load = reservations => ({
  type: LOAD,
  reservations
})

//thunks
export const postReservation = reservation => async (dispatch) => {
  const res = await csrfFetch(`/api/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  })

  if (res.ok) {
    const setReservation = await res.json();
    dispatch(post(setReservation))
  }
}

export const getReservations = userId => async (dispatch) => {
  const res = await fetch(`/api/reservations/${userId}`)
  
  if (res.ok) {
    const userReservations = await res.json();
    dispatch(load(userReservations))
  }
}

// Reducer
const initialState = {
  reservationList: []
}

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ONE: {
      const newReservation = [action.reservation]
      const addedRes = {
        ...state,
        reservationList: newReservation
      }
      return addedRes
    }
    case LOAD: {
      const userReservations = []
      action.reservations.forEach(res => {
        // userReservations[res.id] = res
        userReservations.push(res);
      })
      return {
        ...userReservations,
        ...state
      }
    }
    default:
      return state;
  }
}

export default reservationsReducer;