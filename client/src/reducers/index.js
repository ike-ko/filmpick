import { combineReducers } from 'redux';
import searchOptions from './searchOptions';
import userData from './userData';
import mediaInfo from './mediaInfo';

export default combineReducers({
    searchOptions,
    userData,
    mediaInfo
})