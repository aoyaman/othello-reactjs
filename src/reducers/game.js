// reducer game

const initialState = {
  cells: [],
  counter: 0,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME': {
      // 配列を初期化
      const newState = Object.assign({}, state, { cells: [], counter: 0 });

      // 初期値を埋める
      for (let i = 0; i < 8 * 8; i += 1) {
        let stone = null;
        if (i === 27 || i === 36) {
          stone = 'white';
        } else if (i === 28 || i === 35) {
          stone = 'black';
        }
        newState.cells.push({
          stone,
          key: `cells${i}`,
        });
      }
      return newState;
    }

    case 'CLICK_CELL': {
      console.log('CLICK_CELL:', action);
      const newState = Object.assign({}, state);
      if (newState.cells[action.index].stone !== null) {
        console.log('already stone setted.', newState.cells[action.index]);
        return newState;
      }
      newState.cells[action.index].stone = (newState.counter % 2) === 0 ? 'black' : 'white';
      newState.counter += 1;

      return newState;
    }

    default:
      return state;
  }
};

export default game;
