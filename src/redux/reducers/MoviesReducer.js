import {loop, Cmd} from 'redux-loop';
import {
    fetchPosts,
    getPost,
    headerSearchSet,
    fetchSearchMovie,
    getPostSuccess,
    moviesSearchFetchSuccessfulAction,
    moviesSearchFetchFailedAction
} from "../actions/MoviesAction";

const initialState = {
    posts: [],
    post: {},
    searchType: 'title',
    loading: false,
    headerSearchShow: true
}

export function movieReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_REQUEST":
            return loop({...state, loading: true}, fetchPosts);
        case "FETCH_SUCCESS":
            return {...state, posts: action.payload, loading: false};
        case "FETCH_ERROR":
            return {...state, loading: false};
        case 'SEARCH_BY_TITLE':
            return loop(
                {...state, loading: true},
                Cmd.run(fetchSearchMovie, {
                    successActionCreator: moviesSearchFetchSuccessfulAction,
                    failActionCreator: moviesSearchFetchFailedAction,
                    args: [action.payload]
                })
            );
        case 'MOVIES_SEARCH_FETCH_SUCCESSFUL':
            return {...state, posts: action.payload, loading: false};
        case 'GET_POST':
            return loop(
              {...state, loading: true},
              Cmd.run(getPost, {
                  successActionCreator: getPostSuccess,
                  failActionCreator: moviesSearchFetchFailedAction,
                  args: [action.payload]
              })
            );
        case "GET_POST_SUCCESS":
            return {...state, post: action.payload, loading: false};
        case 'SET_SEARCH_HEADER':
            return {...state, headerSearchShow: action.payload};
        default:
            return state
    }
}
