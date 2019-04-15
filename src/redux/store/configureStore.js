import { createStore } from 'redux'
import { rootReducer, initialState } from '../reducers';
import { install } from 'redux-loop';

const store = createStore(rootReducer, initialState, install());
export default store;