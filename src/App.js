import React from 'react';
import {SearchGiphyGrid, TrendingGiphyGrid} from './giphy/giphy-grid.js';
import {SearchForm} from './search-form.js';

import logo from './logo.svg';
import './App.css';

/**
  App Configuration
 **/

let config = {
  giphy_api_key: 'your_api_key',  
};

try {
  const local_config = require('./local-config.js').default;
  config = {...config, ...local_config};
} catch (ex) {
  console.warn('No local config found.');
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search_query: null,
    };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(ev) {
    ev.preventDefault(); // TODO: Would prefer this be done earlier
    let searchQuery = ev.target.search_query.value;
    if (searchQuery === '') {
      searchQuery = null;
    }
    this.setState({
      search_query: searchQuery,
    });
  }

  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-light bg-light">
          <SearchForm onSearchSubmit={this.onSearchSubmit} />
        </nav>

        <div className="row">
          <div className="offset-md-4 col-md-4">
            {
              this.state.search_query === null ? (
                <TrendingGiphyGrid giphy_api_key={config.giphy_api_key} />
              ) : (
                <SearchGiphyGrid
                  giphy_api_key={config.giphy_api_key}
                  search_query={this.state.search_query}
                />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
