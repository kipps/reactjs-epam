import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import {
  usersReduces,
  usersSaga,
} from './users';


import {
  moviesReduces,
  moviesSaga,
} from './movies';

function* rootSaga() {
  yield all([
    usersSaga(),
    moviesSaga(),
  ]);
}

const rootReducer = combineReducers({
  users: usersReduces,
  movies: moviesReduces
});

export {
  rootReducer,
  rootSaga,
};
