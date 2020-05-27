import React from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({onSearchSubmit}) => {
  const onFormSubmit = (ev) => {
      ev.preventDefault();
      let searchQuery = ev.target.search_query.value;
      if (searchQuery === '') {
        searchQuery = null;
      }

      onSearchSubmit(searchQuery);
  };

	return (
      <form className="form-inline" style={{flex:1}} onSubmit={onFormSubmit}>
        <div className="input-group" style={{flex:1}}>
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1" role="img" aria-label="video camera">🎥</span>
          </div>
          <input type="text" className="form-control"
          	placeholder="Search for GIFs" aria-label="Image Search"
          	aria-describedby="basic-addon1" name="search_query" />
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">Search</button>
          </div>
        </div>
      </form>
  );
};

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func,
};
