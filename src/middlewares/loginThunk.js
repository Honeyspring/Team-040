import { API_URI, API_CODE_ERROR, header } from '../constants/APIConfig';
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
  fetch(`${API_URI}/login`, {
    method: 'POST',
    body: data,
    mode: 'no-cors',
    headers: header()
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status ? API_CODE_ERROR[response.status] : 'ERROR OCCURED !');
      }
      return response.json();
    })
    .then((res) => {
      redirect.push('/');
      window.sessionStorage.setItem('token', res.data.token); // set token in session storage. we decode it with jwt-decode module.
      dispatch(loginUserSuccess(res.data));
    })
    .catch((error) => {
      dispatch(loginUserFailed(error.message ? error.message : error));
    });
};

export default loginThunk;
