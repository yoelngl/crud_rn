import { combineReducers } from 'redux'
import userReducers from './userReducers'

export const rootReducers = combineReducers({
    user: userReducers
})
