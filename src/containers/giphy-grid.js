import React from 'react';
import { connect } from 'react-redux';
import {TrendingGiphyGrid, SearchGiphyGrid} from '../giphy/giphy-grid.js';

const GiphyGrid = ({giphy_api_key, search_query, on_gif_select}) => (
  <div> {
    search_query === null ? (
      <TrendingGiphyGrid giphy_api_key={giphy_api_key} on_gif_select={on_gif_select} />
    ) : (
      <SearchGiphyGrid
        giphy_api_key={giphy_api_key}
        search_query={search_query}
      />
    )
  } </div>
);

const mapStateToProps = state => ({
  giphy_api_key: state.config.giphy_api_key,
  search_query: state.search_query,
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
