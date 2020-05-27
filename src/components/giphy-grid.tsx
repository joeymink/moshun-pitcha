import React, {SyntheticEvent} from 'react';
import PropTypes from 'prop-types';
import { IGif } from '@giphy/js-types';
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Grid } from '@giphy/react-components';
import './giphy-grid.css';

const GiphyGridComponent = ({
	giphy_fetch, search_query, on_gif_select
} : {
	giphy_fetch: GiphyFetch,
	search_query: string,
	on_gif_select: Function,
}) => {
	let fetchGifs = null;
	if (search_query === null) {
		fetchGifs = (offset: number) => giphy_fetch.trending({ offset, limit: 10 });
	} else {
		fetchGifs = (offset: number) => giphy_fetch.search(search_query, { offset, limit: 10 });
	}

	const onGifClick = (gif: IGif, e: SyntheticEvent<HTMLElement, Event>) => {
		e.preventDefault();
	  on_gif_select(gif.embed_url);
	}

	return (
		<div className="text-center">
			<h3>{search_query === null? 'Trending' : search_query}</h3>
			<Grid width={400} columns={2} fetchGifs={fetchGifs} onGifClick={onGifClick} />
		</div>
	);	
};

GiphyGridComponent.propTypes = {
  giphy_fetch: GiphyFetch,
  search_query: PropTypes.string,
  on_gif_select: PropTypes.func,
};

/**
 * Wrapper component that covers all of our cases for the
 * giphy grid presentation area
 */
const GiphyGrid = ({
  giphy_fetch, search_query, on_gif_select, is_preparing_search
} : {
	giphy_fetch: GiphyFetch,
	search_query: string,
	on_gif_select: Function,
	is_preparing_search: boolean,
}) => {
  if (is_preparing_search) {
    return (<div className="text-center"><img src="/45.svg" alt="loading"/></div>);
  } else {
    return (
      <GiphyGridComponent
        giphy_fetch={giphy_fetch}
        on_gif_select={on_gif_select}
        search_query={search_query}
      />
    );
  }
};

/*

Haven't figured out yet how to map upstream redux connector types to these...

GiphyGrid.propTypes = {
  giphy_fetch: GiphyFetch,
  search_query: PropTypes.string,
  on_gif_select: PropTypes.func,
  is_preparing_search: PropTypes.bool,
};

*/

export default GiphyGrid;
