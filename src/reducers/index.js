/**
  App Configuration
 **/

let config = {
  giphy_api_key: 'your_api_key',  
};

try {
  const local_config = require('../local-config.js').default;
  config = {...config, ...local_config};
} catch (ex) {
  console.warn('No local config found.');
}

/**
	Reducer/state
 **/

const initialState = {
	config: config,
	search_query: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, search_query: action.search_query };
    default:
      return state
  }
};
