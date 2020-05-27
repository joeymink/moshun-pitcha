import React from 'react';
import { connect } from 'react-redux';
import FullScreenGif from '../full-screen-gif.js';

const mapStateToProps = state => ({
  selected_gif: state.selected_gif,
});

const mapDispatchToProps = dispatch => ({
  on_close_gif: () => {
    dispatch({type: 'GIF_DESELECT'});
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FullScreenGif);
