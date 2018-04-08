import React from 'react';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <div>
        { i }
      </div>
    );
  }

  render() {
    return (
      <div style={style.board}>
        <div style={style.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div style={style.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div style={style.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

var style = {
  board: {
    backgroundColor: 'green',
    width: 900,
  },
  boardRow: {

  },
};


export default Board;
