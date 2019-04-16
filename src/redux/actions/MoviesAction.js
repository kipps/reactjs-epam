import {Cmd} from 'redux-loop';

export const setYear = (year) => {
  return {
    type: SET_YEAR,
    payload: year,
  }
}

export function fetchPostsRequest() {
  return {
    type: "FETCH_REQUEST"
  }
}

function fetchPostsSuccess(response) {
  return {
    type: "FETCH_SUCCESS",
    payload: response.data
  }
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  }
}

export function postSortOrderRequest() {
  return {
    type: "POST_SORT_ORDER"
  }
}

export function searchByTitle(title) {
  return {
    type: 'SEARCH_BY_TITLE',
    payload: title
  };
}

export function searchByGenre(genre) {
  return {
    type: 'SEARCH_BY_GENRE',
    payload: genre
  };
}

export function moviesSearchFetchSuccessfulAction(movies) {
  return {
    type: 'MOVIES_SEARCH_FETCH_SUCCESSFUL',
    payload: movies.data
  };
}

export function moviesSearchFetchFailedAction(err) {
  return {
    type: 'MOVIES_SEARCH_FETCH_ERROR',
    err
  };
}


export const fetchPosts = Cmd.run(
  () => fetch("https://reactjs-cdp.herokuapp.com/movies/").then((response) => response.json()),
  {successActionCreator: fetchPostsSuccess, failActionCreator: fetchPostsError}
);

export const sortByOrder = Cmd.run(
  () => fetch("https://reactjs-cdp.herokuapp.com/movies?sortOrder=title").then((response) => response.json()),
  {successActionCreator: fetchPostsSuccess, failActionCreator: fetchPostsError}
);

export function fetchSearchMovie(title) {
  let title_ = encodeURIComponent(title);
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${title_}&searchBy=title`).then((response) => response.json());
}

export function fetchSearchGenre(genre) {
  let genre_ = encodeURIComponent(genre);
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${genre_}&searchBy=genres`).then((response) => response.json());
}
