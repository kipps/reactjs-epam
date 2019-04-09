import { combineReducers } from 'redux'
import { movieReducer } from './Movies'
import { userReducer } from './User'

export const rootReducer = combineReducers({
    movies: movieReducer,
    user: userReducer,
})