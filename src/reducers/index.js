import { GiphyFetch } from '@giphy/js-fetch-api';

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

  giphy_fetch: new GiphyFetch(config.giphy_api_key),

  // Supports a UX hack to ensure we force a
  // repaint of the giphy search grid between
  // searches:
  is_preparing_search: false,

  search_query: null,

  selected_gif: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, search_query: action.search_query, is_preparing_search: false };
    case 'GIF_SELECT':
      return { ...state, selected_gif: action.selected_gif };
    case 'GIF_DESELECT':
      return { ...state, selected_gif: null };
    case 'PREPARE_SEARCH':
      return { ...state, is_preparing_search: true };
    default:
      return state;
  }
};
