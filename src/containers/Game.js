import { connect } from 'react-redux';
import Game from '../components/Game';

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
