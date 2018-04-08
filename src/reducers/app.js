/* global console */

const initialState = {
  window: 'title',
};
const app = (state = initialState, action) => {
  console.log('app_reducer', action.type);
  switch (action.type) {
    case 'START_GAME':
      return Object.assign({}, state, { window: 'game' });

    default:
      return state;
  }
};

export default app;
