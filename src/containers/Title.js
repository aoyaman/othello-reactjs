import { connect } from 'react-redux';

import { startGame } from '../actions';
import Title from '../components/Title';

// const mapStateToProps = state => ({
//   show: state.title.show,
// });

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  clickStartMenu: () => dispatch(startGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Title);
