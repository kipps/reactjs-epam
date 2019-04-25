import { combineReducers } from 'redux-loop'
import { movieReducer } from './MoviesReducer'
import { userReducer } from './UserReducer'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux';

import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions'

export const rootReducer = combineReducers({
    routing: routerReducer,
    moviesState: movieReducer,
    userState: userReducer,
    form: formReducer
})