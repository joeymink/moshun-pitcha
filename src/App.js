import React from 'react';
import GiphyGrid from './containers/giphy-grid.js';
import SearchForm from './containers/search-form.js';
import FullScreenGif from './containers/full-screen-gif.js';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">

    <nav className="navbar navbar-dark bg-dark">
      <SearchForm />
    </nav>

    <div className="row">
      <div className="offset-md-3 col-md-6">
        <GiphyGrid />
      </div>
    </div>

    <FullScreenGif />
  </div>
);

export default App;
