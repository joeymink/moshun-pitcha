import { connect } from 'react-redux';
import GiphyGrid from '../components/giphy-grid.tsx';

const mapStateToProps = state => ({
  giphy_fetch: state.giphy_fetch,
  search_query: state.search_query,
  is_preparing_search: state.is_preparing_search,
});

const mapDispatchToProps = dispatch => ({
  on_gif_select: (selected_gif) => {
    dispatch({type: 'GIF_SELECT', selected_gif: selected_gif});
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GiphyGrid);
