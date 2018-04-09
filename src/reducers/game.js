// reducer game

const initialState = {
  cells: [],
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME': {
      // 配列を初期化
      const newState = Object.assign({}, state, { cells: [] });

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

    default:
      return state;
  }
};

export default game;
