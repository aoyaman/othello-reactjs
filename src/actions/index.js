export const startGame = () => ({
  type: 'START_GAME',
});

export const clickCell = index => ({
  type: 'CLICK_CELL',
  index,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
