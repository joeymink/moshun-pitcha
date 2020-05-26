import React from 'react';
import GiphyGrid from './containers/giphy-grid.js';
import SearchForm from './containers/search-form.js';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-light bg-light">
          <SearchForm />
        </nav>

        <div className="row">
          <div className="offset-md-4 col-md-4">
            <GiphyGrid />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
