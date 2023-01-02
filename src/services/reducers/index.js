import {combineReducers} from 'redux';
import {numberReducer} from './reducer';

export default combineReducers({
    result:numberReducer
})