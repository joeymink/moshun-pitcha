import React from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

export const GiphyGrid = (props) => {
	const gf = new GiphyFetch(props.giphy_api_key);
	const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });
	return (
		<Grid width={400} columns={2} fetchGifs={fetchGifs} />
	);
};
