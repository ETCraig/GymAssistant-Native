import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {GET_ERRORS, SET_CURRENT_USER} from './Types';
import jwt_decode from 'jwt-decode';

export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
        .then(res => history.push('/Login'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.res.data
        })
    );
}

export const loginUser = userData => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            const token = res.data;
            saveItem('jwtToken', token);
            const decoded = jwt_decode(token);
            setAuthToken(true);
            dispatch(setCurrentUser(decoded));
        }).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.res.data
        })
    );
}