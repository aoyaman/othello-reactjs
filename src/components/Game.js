import React from 'react';
import PropTypes from 'prop-types';
/* global window */

const drawStone = (index, cell) => {
  if (cell.nextStone === null) {
    return (
      <div style={{
        color: (cell.stone === null ? 'green' : cell.stone),
        width: 'calc(100% - 10px)',
        height: 'calc(100% - 10px)',
        borderRadius: '50%',
        backgroundColor: (cell.stone === null ? 'green' : cell.stone),
        margin: '5px',
      }}
      >
        { index }
      </div>
    );
  }
  return (
    <div style={{
      color: cell.nextStone,
      width: 'calc(100% - 20px)',
      height: 'calc(100% - 20px)',
      borderRadius: '50%',
      backgroundColor: cell.nextStone,
      border: '1px solid pink',
      margin: '10px',
      opacity: '0.2',
    }}
    >
      { index }
    </div>
  );
};

const drawCell = (index, data, windowWidth, onClick) =>
  // console.log('drawCell()', index, data);
  (
    <td
      key={`${data.key}${data.stone}`}
    >
      <div
        style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          width: (windowWidth < 400 ? windowWidth / 8 : 400 / 8) - 2,
          height: (windowWidth < 400 ? windowWidth / 8 : 400 / 8) - 2,
          border: '1px solid black',
          cursor: (data.nextStone !== null ? 'pointer' : 'auto'),
        }}
        onClick={() => { onClick(index); }}
        onKeyPress={() => {}}
        role="button"
        tabIndex={index}
      >
        { drawStone(index, data) }
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

const Game = ({ game, onCellClick }) => (
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
        {row.map(i => drawCell(i, game.cells[i], window.innerWidth, onCellClick))}
      </div>
    ))}

  </div>
);


Game.propTypes = {
  game: PropTypes.shape({}).isRequired,
  onCellClick: PropTypes.func.isRequired,
};

export default Game;
