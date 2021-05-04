//action types
const LOAD = 'photos/LOAD';

//action creators
const load =  photos => ({
  type: LOAD,
  photos
})

//thunks
export const getPhotos = (restId) => async (dispatch) => {
  const res = await fetch(`/api/photos/${restId}`)

  if (res.ok) {
    const photoList = await res.json();
    dispatch(load(photoList));
  }
}

// Photos Reducer
const initialState = {
  photoList: []
}

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const restPhotos = [];
      action.photos.forEach(photo => {
        restPhotos.push(photo);
      });
      return {
        ...state,
        photoList: restPhotos
      }
    }
    default:
      return state;
  }
}

export default photoReducer;