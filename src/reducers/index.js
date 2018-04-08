import { combineReducers } from 'redux';
import game from './game';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  game,
  visibilityFilter,
});
