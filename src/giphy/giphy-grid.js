import React from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

export const TrendingGiphyGrid = (props) => {
	const gf = new GiphyFetch(props.giphy_api_key);
	const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });
	return (
		<Grid width={400} columns={2} fetchGifs={fetchGifs} />
	);
};

export const SearchGiphyGrid = ({giphy_api_key, search_query}) => {
	if (search_query === null) {
		return null;
	}

	const gf = new GiphyFetch(giphy_api_key);
	const fetchGifs = (query: str) => gf.search(search_query);

	return (
		<div>
			<h2>{search_query}</h2>
			{ /* For some reason, React will not repaint this on search changes */ }
			<Grid width={400} columns={2} fetchGifs={fetchGifs} data-search-query={search_query}/>
		</div>
	);

};
