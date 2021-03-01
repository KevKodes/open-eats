import { csrfFetch } from "./csrf";


// action types
const POST_ONE = 'reservations/POST_ONE';
const LOAD = 'reservations/LOAD';
const CANCEL = 'reservations/CANCEL';

//action creators
const post = reservation => ({
  type: POST_ONE,
  reservation
})

const load = reservations => ({
  type: LOAD,
  reservations
})

const cancel = reservationId => ({
  type: CANCEL,
  reservationId
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

export const cancelReservation = resId => async (dispatch) => {
  const response = await csrfFetch(`/api/reservations/${resId}`, {
    method: 'delete'
  })

  if (response.ok) {
    dispatch(cancel(resId))
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
        ...state,
        reservationList: userReservations,
      }
    }
    case CANCEL: {
      const updatedReservations = [...state.reservationList].filter(res => {
        return parseInt(res.id) !== parseInt(action.reservationId)
      })
      return {
        ...state,
        reservationList: [...updatedReservations]
      }
    }
    default:
      return state;
  }
}

export default reservationsReducer;