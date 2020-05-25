import React from 'react';

export const SearchForm = (props) => {
	return (
      <form className="form-inline" style={{flex:1}} onSubmit={props.onSearchSubmit}>
        <div className="input-group" style={{flex:1}}>
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">🎥</span>
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
