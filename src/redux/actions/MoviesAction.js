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

export const searchByTitleRequest = (posts) => {
  return {
    type: "SEARCH_BY_TITLE",
    payload: posts
  }
}

export const fetchPosts = Cmd.run(
  () => fetch("https://reactjs-cdp.herokuapp.com/movies/").then((response) => response.json()),
  {successActionCreator: fetchPostsSuccess, failActionCreator: fetchPostsError}
);

export const sortByOrder = Cmd.run(
  () => fetch("https://reactjs-cdp.herokuapp.com/movies?sortOrder=title").then((response) => response.json()),
  {successActionCreator: fetchPostsSuccess, failActionCreator: fetchPostsError}
);

export const searchByTitle = Cmd.run(
  () => fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&search=${type}=title`).then((response) => response.json()),
  {successActionCreator: fetchPostsSuccess, failActionCreator: fetchPostsError}
);

