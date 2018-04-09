import React from 'react';
import PropTypes from 'prop-types';
/* global window */

const style = {
  board: {
    backgroundColor: 'green',
    position: 'absolute',
    width: '400px',
    height: '400px',
    maxWidth: '100%',
    paddingTop: '50%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    textAlign: 'center',
    letterSpacing: '-.40em', /* 文字間を詰めて隙間を削除する */
  },
  cell: {
    width: '12.5%',
    height: '0',
    paddingTop: '12.5%',
    border: '1px solid black',
  },
};

const drawStone = (index, stone) => (
  <div style={{
    color: (stone === null ? 'green' : stone),
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
    borderRadius: '50%',
    backgroundColor: (stone === null ? 'green' : stone),
    margin: '5px',
  }}
  >
    { index }
  </div>
);

const drawCell = (index, data, windowWidth) => (
  <td>
    <div
      key={data.key}
      style={{
        display: 'table-cell',
        verticalAlign: 'middle',
        width: (windowWidth < 400 ? windowWidth / 8 : 400 / 8) - 2,
        height: (windowWidth < 400 ? windowWidth / 8 : 400 / 8) - 2,
        border: '1px solid black',
        cursor: (data.stone === null ? 'pointer' : 'auto'),
      }}
    >
      { drawStone(index, data.stone) }
    </div>
  </td>
);

const cellMap = [];
for (let i = 0; i < 8; i += 1) {
  const row = [];
  for (let j = 0; j < 8; j += 1) {
    row.push((i * 8) + j);
  }
  cellMap.push(row);
}

const Game = ({ game }) => (
  <div style={{
      backgroundColor: 'green',
      position: 'absolute',
      width: window.innerWidth < 400 ? window.innerWidth : 400,
      height: window.innerWidth < 400 ? window.innerWidth : 400,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      textAlign: 'center',
    }}
  >
    {cellMap.map(row => (
      <div>
        {row.map(i => drawCell(i, game.cells[i], window.innerWidth))}
      </div>
    ))}

  </div>
);


Game.propTypes = {
  game: PropTypes.shape({}).isRequired,
};

export default Game;
