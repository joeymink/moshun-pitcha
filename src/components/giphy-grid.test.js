import React from 'react';
import { render } from '@testing-library/react';
import GiphyGrid from './giphy-grid.js';

test('default state renders trending use case', () => {
  const { getByText } = render(
    <GiphyGrid
      giphy_fetch={()=>({})}
      search_query={null}
      on_gif_select={()=>{}}
      is_preparing_search={false}
    />
  );
  const element = getByText(/trending/i);
  expect(element).toBeInTheDocument();
});

test('search state renders trending use case', () => {
  const { getByText } = render(
    <GiphyGrid
      giphy_fetch={()=>({})}
      search_query={'my search query'}
      on_gif_select={()=>{}}
      is_preparing_search={false}
    />
  );
  const element = getByText(/my search query/i);
  expect(element).toBeInTheDocument();
});

test('preparing-search state renders loading ux', () => {
  const { getByAltText } = render(
    <GiphyGrid
      giphy_fetch={()=>({})}
      search_query={null}
      on_gif_select={()=>{}}
      is_preparing_search={true}
    />
  );
  const linkElement = getByAltText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
