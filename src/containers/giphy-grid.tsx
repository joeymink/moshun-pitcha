import { connect, ConnectedProps } from 'react-redux';
import { IGif } from '@giphy/js-types';
import { GiphyFetch } from '@giphy/js-fetch-api'
import GiphyGrid from '../components/giphy-grid';

interface RootState {
  config: any,
  giphy_fetch: GiphyFetch,
  is_preparing_search: boolean,
  search_query: string,
  selected_gif: IGif,
};

const mapStateToProps = (state: RootState) => ({
  giphy_fetch: state.giphy_fetch,
  search_query: state.search_query,
  is_preparing_search: state.is_preparing_search,
});

const mapDispatchToProps = (dispatch: Function) => ({
  on_gif_select: (selected_gif: IGif) => {
    dispatch({type: 'GIF_SELECT', selected_gif: selected_gif});
  }
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(GiphyGrid);
