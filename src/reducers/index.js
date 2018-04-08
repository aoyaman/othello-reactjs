import { combineReducers } from 'redux';
import game from './game';
import app from './app';

export default combineReducers({
  game,
  app,
});
