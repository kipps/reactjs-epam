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

export function search(title) {
  return {
    type: 'SEARCH',
    payload: title
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
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&search=${title_}&searchBy=title`).then((response) => response.json());
}
