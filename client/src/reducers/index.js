import { combineReducers } from 'redux';
import searchOptions from './searchOptions';
import setFavorite from './setFavorite';

export default combineReducers({
    searchOptions,
    setFavorite
})