import { csrfFetch } from "./csrf";


// action types
const POST_ONE = 'reservations/POST_ONE';


//action creators
const post = reservation => ({
  type: POST_ONE,
  reservation
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
    console.log('returned in thunk: ', setReservation)
    dispatch(post(setReservation))
  }
}

// Reducer
const initialState = {
  reservationList: []
}

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ONE: {
      const allReservations = []
      //update and return state
    }
    default:
      return state;
  }
}

export default reservationsReducer;