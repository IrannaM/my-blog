import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import blogReducer from './reducer'; // Assuming you have a rootReducer

const rootReducer = combineReducers({
  blog: blogReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
