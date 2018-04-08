import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';


const Title = ({ clickStartMenu }) => (
  <div
    style={{
       position: 'absolute',
       width: '200px',
       height: '200px',
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       margin: 'auto',
       textAlign: 'center',
     }}
  >
    <h1>OTHELLO</h1>
    <br />
    <RaisedButton
      label="始める"
      primary
      onClick={clickStartMenu}
    />

  </div>
);

Title.propTypes = {
  clickStartMenu: PropTypes.func.isRequired,
};

export default Title;
