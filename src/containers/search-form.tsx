import { connect } from 'react-redux';
import {SearchForm} from '../components/search-form.js';

// No state to map for this component
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function) => ({
  onSearchSubmit: (searchQuery: Number) => {
  	// Dispatch a PREPARE_SEARCH action
  	dispatch({type: 'PREPARE_SEARCH'});
    
    // Then schedule a SEARCH action.
    // Supports a UX hack that ensures the giphy
    // grid repaints between searches.
    setTimeout(() => {
    	dispatch({type: 'SEARCH', search_query: searchQuery})
    }, 1000);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);
