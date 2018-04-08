import React from 'react';
import PropTypes from 'prop-types';

import Title from '../containers/Title';
import Game from '../containers/Game';

const App = ({ window }) => (
  <div>
    {window === 'title' && (
      <Title />
    )}
    {window === 'game' && (
      <Game />
    )}
  </div>
);

App.propTypes = {
  window: PropTypes.string.isRequired,
};

export default App;
