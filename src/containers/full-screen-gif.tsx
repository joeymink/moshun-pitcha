import { connect } from 'react-redux';
import FullScreenGif from '../components/full-screen-gif';

interface RootState {
  selected_gif: string,
};

const mapStateToProps = (state: RootState) => ({
  selected_gif: state.selected_gif,
});

const mapDispatchToProps = (dispatch: Function) => ({
  on_close_gif: () => {
    dispatch({type: 'GIF_DESELECT'});
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FullScreenGif);
