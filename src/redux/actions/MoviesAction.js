import {Cmd} from 'redux-loop';

export const setYear = (year) => {
  return {
    type: SET_YEAR,
    payload: year,
  }
}

export function fetchPostsRequest(){
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
export const fetchPosts = Cmd.run(
    () => fetch("https://reactjs-cdp.herokuapp.com/movies/").then((response) => response.json()),
    {successActionCreator: fetchPostsSuccess, failActionCreator: fetchPostsError}
);
