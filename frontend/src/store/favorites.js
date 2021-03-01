
// action types
const LOAD = 'favorites/LOAD';


//action creators
const load = favoritesList => ({
  type: LOAD,
  favoritesList
})


// thunks
export const getFavorites = userId => async (dispatch) => {
  const response = await fetch(`/api/favorites/${userId}`)

  if (response.ok) {
    const favList = await response.json();
    dispatch(load(favList));
  }
}

// Reducer
const initialState = {}

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD: {
      const userFavs = [];
      action.favoritesList.forEach(fav => {
        userFavs.push(fav)
      })
      return {
        ...state,
        list: userFavs,
      }
    }
    default:
      return state;
  }

}