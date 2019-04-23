import {loop, Cmd} from 'redux-loop';
import {
    fetchPosts,
    fetchSearchMovie,
    moviesSearchFetchSuccessfulAction,
    moviesSearchFetchFailedAction
} from "../actions/MoviesAction";

const initialState = {
    posts: [],
    searchType: 'title',
    loading: false
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
        default:
            return state
    }
}
