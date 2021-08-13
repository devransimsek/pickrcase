import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import numbers from './numbers-reducer';

const reducers = combineReducers({
  numbers,
});
export const store = createStore(reducers, applyMiddleware(thunk));
