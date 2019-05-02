import { createStore, applyMiddleware } from 'redux'

import { rootReducer} from '../reducers';
import { install } from 'redux-loop';

const store = createStore(rootReducer, install());
export default store;