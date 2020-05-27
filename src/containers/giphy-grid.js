import React from 'react';
import { connect } from 'react-redux';
import GiphyGridComponent from '../components/giphy-grid.js';

/**
 * Wrapper component that covers all of our cases for the
 * giphy grid presentation area
 */
const GiphyGrid = ({
  giphy_api_key, search_query, on_gif_select, is_preparing_search
}) => {
  if (is_preparing_search) {
    return <div className="text-center"><img src="/45.svg" alt="loading"/></div>
  } else {
    return (
      <GiphyGridComponent
        giphy_api_key={giphy_api_key}
        on_gif_select={on_gif_select}
        search_query={search_query}
      />
    );
  }
};

const mapStateToProps = state => ({
  giphy_api_key: state.config.giphy_api_key,
  search_query: state.search_query,
  is_preparing_search: state.is_preparing_search,
});

const mapDispatchToProps = dispatch => ({
  on_gif_select: (selected_gif) => {
    dispatch({type: 'GIF_SELECT', selected_gif: selected_gif});
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GiphyGrid);
