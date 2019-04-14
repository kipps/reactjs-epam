import axios from 'axios';

export const setYear = (year) => {
  return {
    type: SET_YEAR,
    payload: year,
  }
}

export const loadMovies = () => {
  return (dispatch) => {
    return axios.get('https://reactjs-cdp.herokuapp.com/movies/').then((response) => {
      dispatch(showMovies(response.data));
    })
  }
}

export const showMovies = (array) => {
  return {
    type: "SHOW_MOVIES",
    payload: array
  }
}

function fetchPostsRequest(){
  return {
    type: "FETCH_REQUEST"
  }
}

function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload
  }
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  }
}

export function fetchPostsWithRedux() {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
      if(response.status === 200){
        dispatch(fetchPostsSuccess(json))
      }
      else{
        dispatch(fetchPostsError())
      }
    })
  }
}

export function fetchPosts() {
  const URL = "https://reactjs-cdp.herokuapp.com/movies/";
  return fetch(URL, { method: 'GET'})
    .then( response => Promise.all([response, response.json()]));
}
