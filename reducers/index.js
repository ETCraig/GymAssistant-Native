import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import goalReducer from './goalReducer';
import userReducer from './userReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    goal: goalReducer,
    user: userReducer
});