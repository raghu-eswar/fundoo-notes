import axios from 'axios';
import * as userApiConstants from '../apiConstants/userApiConstants';

export function logIn(logInData) {
    return axios.post(process.env.REACT_APP_API_BASE_URL + userApiConstants.authentication.logIn, logInData)
}