import React from 'react';
import { connect } from 'react-redux';
import {TrendingGiphyGrid, SearchGiphyGrid} from '../giphy/giphy-grid.js';

const GiphyGrid = ({giphy_api_key, search_query}) => (
  <div> {
    search_query === null ? (
      <TrendingGiphyGrid giphy_api_key={giphy_api_key} />
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

export default connect(
  mapStateToProps,
)(GiphyGrid);
