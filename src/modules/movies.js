import { call, put, all, takeLatest } from 'redux-saga/effects';

// Actions

const FETCH_MOVIES = 'Movies/FETCH';
const FETCH_MOVIE_BY_ID = 'Movies/FETCH_BY_ID';
const UPDATE = 'Movies/UPDATE';
const UPDATE_CURRENT_MOVIE = 'Movies/UPDATE_CURRENT_MOVIE';

// Action Creators
export const fetchMovies = () => ({
  type: FETCH_MOVIES,
});
export const fetchMoveById = movieId => ({
  type: FETCH_MOVIE_BY_ID,
  payload: movieId,
});

export const updateMovies = movies => ({
  type: UPDATE,
  payload: movies,
});

export const updateCurrentMovie = movie => ({
  type: UPDATE_CURRENT_MOVIE,
  payload: movie,
});

// Get Movies
export function* fetchMoviesAsync() {
  const response = yield call(fetch, 'https://reactjs-cdp.herokuapp.com/movies/');
  const movies = yield response.json();
  yield put(updateMovies(movies.data));
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMoviesAsync);
}

export function* fetchMovieByIdAsync(action) {
  const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies/${action.payload}`);
  const movie = yield response.json();
  yield put(updateCurrentMovie(movie));
}
export function* watchFetchMovieById() {
  yield takeLatest(FETCH_MOVIE_BY_ID, fetchMovieByIdAsync);
}

// Movie Saga
export function* moviesSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchMovieById(),
  ]);
}

// Initial state
const INITIAL_STATE = {
  loading: false,
  items: [],
};

// Reducer
export const moviesReduces = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES:
    case FETCH_MOVIE_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case UPDATE:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case UPDATE_CURRENT_MOVIE:
      return {
        ...state,
        loading: false,
        current: action.payload,
      };
    default:
      return state;
  }
};
