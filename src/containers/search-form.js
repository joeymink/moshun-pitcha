import React from 'react';
import { connect } from 'react-redux';
import {SearchForm} from '../components/search-form.js';

// No state to map for this component
const mapStateToProps = () => {{}};

const mapDispatchToProps = dispatch => ({
  onSearchSubmit: (searchQuery) => {
    dispatch({type: 'SEARCH', search_query: searchQuery});
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);
