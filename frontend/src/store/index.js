import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { login } from './session';
import sessionReducer from './session';
import restaurantReducer from './restaurants';
import photoReducer from "./photos";
import reservationsReducer from "./reservations";
import favoritesReducer from "./favorites";
import reviewsReducer from "./reviews";

const rootReducer = combineReducers({
  session: sessionReducer,
  restaurants: restaurantReducer,
  photos: photoReducer,
  reservations: reservationsReducer,
  favorites: favoritesReducer,
  reviews: reviewsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
