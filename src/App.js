import React from 'react';
import GiphyGrid from './containers/giphy-grid.js';
import SearchForm from './containers/search-form.tsx';
import FullScreenGif from './containers/full-screen-gif.js';

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
