import {Cmd} from 'redux-loop';

export const headerSearchSet = (boolean) => {
  return {
    type: 'SET_SEARCH_HEADER',
    payload: boolean
  }
}

export function fetchPostsRequest() {
  return {
    type: "FETCH_REQUEST"
  }
}


export function getPostRequest(id) {
  return {
    type: "GET_POST",
    payload: id
  }
}

function fetchPostsSuccess(response) {
  return {
    type: "FETCH_SUCCESS",
    payload: response.data
  }
}

export function getPostSuccess(response) {
  return {
    type: "GET_POST_SUCCESS",
    payload: response
  }
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  }
}

export function searchByTitle(title) {
  return {
    type: 'SEARCH_BY_TITLE',
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

export function fetchSearchMovie(query) {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?${query}`).then((response) => response.json());
}

export function getPost(id) {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`).then((response) => response.json());
}
