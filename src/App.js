import React from 'react';
import {GiphyGrid} from './giphy/giphy-grid.js';
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

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="offset-md-4 col-md-4">
          <GiphyGrid giphy_api_key={config.giphy_api_key} />
        </div>
      </div>
    </div>
  );
}

export default App;
