import {loop} from 'redux-loop';
import {fetchPosts, sortByOrder, fetchSearchMovie, userFetchSuccessfulAction, userFetchFailedAction} from "../actions/MoviesAction";

const initialState = {
  posts: [],
  loading: false
}

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return loop({...state, loading: true}, fetchPosts);
    case "POST_SORT_ORDER":
      return loop({...state, loading: true}, sortByOrder);
    case "FETCH_SUCCESS":
      return {...state, posts: action.payload, loading: false };
    case "FETCH_ERROR":
      return {...state, loading: false };
    case 'INIT':
      return loop(
        {...state, loading: true},
        Cmd.run(fetchSearchMovie, {
          successActionCreator: userFetchSuccessfulAction,
          failActionCreator: userFetchFailedAction
        })
      );
    default:
      return state
  }
}
