import { combineReducers } from 'redux';
import searchOptions from './searchOptions';
import userData from './userData';

export default combineReducers({
    searchOptions,
    userData
})