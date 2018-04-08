const initialState = {
  cells: [],
};
const game = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME': {
      const newState = Object.assign({}, state, { cells: [] });
      for (let i = 0; i < 8 * 8; i += 1) {
        newState.cells.push({
          stone: null,
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
