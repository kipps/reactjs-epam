import { combineReducers } from 'redux-loop'
import { movieReducer } from './Movies'
import { userReducer } from './User'

import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions'

export const rootReducer = combineReducers({
    moviesState: movieReducer,
    userState: userReducer
})