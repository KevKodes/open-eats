import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import RestaurantPage from './components/RestaurantPage';
import BookPage from './components/BookPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/restaurants/:restaurantId">
            <RestaurantPage />
          </Route>
          <Route path="/book">
            <BookPage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
