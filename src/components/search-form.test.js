import React from 'react';
import { mount } from 'enzyme';
import { SearchForm } from './search-form.tsx';

test('form submission calls expected function', () => {
  const onSubmitFn = jest.fn();
  const wrapper = mount(<SearchForm onSearchSubmit={onSubmitFn}/>);
  const form = wrapper.find('form');
  form.simulate('submit', {
    target: {
      search_query: {
        value: 'my search query'
      }
    }
  });
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
});
