import axios from 'axios';
import { header } from '../constants/APIConfig';
import { loginUser, loginUserSuccess, loginUserFailed } from '../actions/loginAction';

/**
 * LOGIN THUNK
 * @func loginThunk
 * @param {object} data
 * @param {object} redirect
 * @description Thunk to register user
 */
const loginThunk = (data, redirect) => (dispatch) => {
  dispatch(loginUser());
  axios({
    method: 'post',
    data,
    url: `/api/login`,
    headers: header()
  })
  .then((response) => {
    if (response.data.data.token) {
      document.cookie = `token=${response.data.data.token}; path=/; max-age=86400; samesite=strict`; // set token in cookie. we decode it with jwt-decode module.
      dispatch(loginUserSuccess(response.data.data));
      redirect.push('/home');
    }
  })
  .catch((error) => {
    dispatch(loginUserFailed(error.message === 'Request failed with status code 401' ? 'Incorrect password!' : error.message));
  });
};

export default loginThunk;
