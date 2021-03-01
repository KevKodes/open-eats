import { csrfFetch } from "./csrf";

// action types
const LOAD = 'favorites/LOAD';
const SAVE = 'favorites/SAVE';
const REMOVE = 'favorites/REMOVE'


//action creators
const load = favoritesList => ({
  type: LOAD,
  favoritesList
})

const save = fav => ({
  type: SAVE,
  fav
})

const remove = fav => ({
  type: REMOVE,
  fav
})

// thunks
export const getFavorites = userId => async (dispatch) => {
  const response = await fetch(`/api/favorites/${userId}`)

  if (response.ok) {
    const favList = await response.json();
    dispatch(load(favList));
  }
}

export const saveFavorite = (restId, userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ restId, userId })
  })
  if (res.ok) {
    const savedFav = await res.json();
    console.log('saved fav returned in thunk: ', savedFav)
    dispatch(save(savedFav))
  }
}

export const removeFavorite = (restId, userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/favorites`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ restId, userId })
  })
  if (res.ok) {
    const fav = await res.json();
    console.log('delete returned in thunk: ', fav)
    dispatch(remove(fav))
  }
}

// Reducer
const initialState = {
  list: []
}

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD: {
      const userFavs = [];
      action.favoritesList.forEach(fav => {
        userFavs.push(fav)
      })
      return {
        ...state,
        list: [...userFavs]
      }
    }
    case SAVE: {
      const newFav = [action.fav]
      return {
        ...state,
        list: [...newFav]
      }
    }
    case REMOVE: {

    }
    default:
      return state;
  }

}