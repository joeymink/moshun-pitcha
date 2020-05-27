import React from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import './giphy-grid.css';

const GiphyGridComponent = ({giphy_api_key, search_query, on_gif_select}) => {
	const gf = new GiphyFetch(giphy_api_key);
	let fetchGifs = null;
	if (search_query === null) {
		fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });
	} else {
		fetchGifs = (offset: number) => gf.search(search_query, { offset, limit: 10 });
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

/**
 * Wrapper component that covers all of our cases for the
 * giphy grid presentation area
 */
export default ({
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
