import React from 'react';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
