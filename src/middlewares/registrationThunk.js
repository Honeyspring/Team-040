import { API_URI, API_CODE_ERROR, header } from '../constants/APIConfig';
import { registerUser, registerUserSuccess, registerUserFailed } from '../actions/registerAction';

/**
 * REGISTRATION THUNK
 * @func registrationThunk
 * @param {object} data
 * @param {event} even
 * @description Thunk to register user 
 */
const registrationThunk = (data, even) => (dispatch) => {
  dispatch(registerUser());
  fetch(`${API_URI}/register`, {
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
      even.reset();
      dispatch(registerUserSuccess(res.data));
    })
    .catch((error) => {
      dispatch(registerUserFailed(error.message ? error.message : error));
    });
};

export default registrationThunk;
