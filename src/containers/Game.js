import { connect } from 'react-redux';

import { clickCell } from '../actions';
import Game from '../components/Game';

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = dispatch => ({
  onCellClick: index => dispatch(clickCell(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
