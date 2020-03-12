import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm, faSlidersH, faSearch, faQuestion, faHeart } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationContainer from './containers/NavigationContainer';

import Search from './components/Search';
import Favorites from './components/Favorites';
import Recommendations from './components/Recommendations';
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

        <Route path="/" exact component={Search} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/recommendations" component={Recommendations} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}

export default App;
