import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
import { rootReducer, initialState } from '../reducers';
import { install } from 'redux-loop';

const store = createStore(rootReducer, initialState, install());
export default store;