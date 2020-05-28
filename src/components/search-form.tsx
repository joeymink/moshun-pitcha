import React from 'react';

export const SearchForm = ({onSearchSubmit} : {onSearchSubmit: Function}) => {
  const onFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      const target = ev.target as HTMLFormElement;
      const inputElement = target.search_query as HTMLInputElement;
      let searchQuery = inputElement.value;
      if (searchQuery === '') {
        return onSearchSubmit(null);
      } else {
        return onSearchSubmit(searchQuery);
      }

      
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
