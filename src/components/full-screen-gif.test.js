import React from 'react';
import { render } from '@testing-library/react';
import FullScreenGif from './full-screen-gif.tsx';

test('default state does not render full screen gif', () => {
  const { queryByTitle } = render(
    <FullScreenGif selected_gif={null} on_close_gif={()=>{}} />
  );
  const element = queryByTitle(/selected giphy/i);
  expect(element).toBe(null);
});

test('selected-gif state does renders full screen gif', () => {
  const { getByTitle } = render(
    <FullScreenGif selected_gif={'https://backroad.city'} on_close_gif={()=>{}} />
  );
  const element = getByTitle(/selected giphy/i);
  expect(element).toBeInTheDocument();
});
