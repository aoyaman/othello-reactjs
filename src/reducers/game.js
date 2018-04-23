// reducer game

const initialState = {
  cells: [],
  counter: 0,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
    case 'CLICK_CELL': {
      console.log(action);
      // 配列を初期化
      const newState = Object.assign({}, state, { cells: [], counter: action.counter });

      // 配列をコピーする
      newState.cells = [];
      for (let i = 0; i < action.cells.length; i += 1) {
        newState.cells.push(Object.assign({}, action.cells[i]));
      }
      return newState;
    }

    // case 'CLICK_CELL': {
    //   console.log('CLICK_CELL:', action);
    //   const newState = Object.assign({}, state);
    //   if (newState.cells[action.index].stone !== null) {
    //     console.log('already stone setted.', newState.cells[action.index]);
    //     return newState;
    //   }
    //   newState.cells[action.index].stone = (newState.counter % 2) === 0 ? 'black' : 'white';
    //   newState.counter += 1;
    //
    //   return newState;
    // }

    default:
      return state;
  }
};

export default game;
