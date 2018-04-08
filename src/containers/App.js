import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  window: state.app.window,
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
