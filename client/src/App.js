import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm, faSlidersH, faSearch, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationContainer from './containers/NavigationContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import RecommendationsContainer from './containers/RecommendationsContainer';
import SearchContainer from './containers/SearchContainer';

import Login from './components/Login';

// Add FontAwesome icons to library here
library.add(
  faFilm,
  faSlidersH,
  faSearch,
  faQuestion,
  faHeart
);

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationContainer />

        <Route path="/" exact component={SearchContainer} />
        <Route path="/favorites" component={FavoritesContainer} />
        <Route path="/recommendations" component={RecommendationsContainer} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}

export default App;
