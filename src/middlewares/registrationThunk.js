import axios from 'axios';
import { header } from '../constants/APIConfig';
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
  delete data.confirmPassword;
  data.gender = '';
  data.state_of_origin = '';
  data.phone_number = '';
  data.local_govt = '';
  data.firstname = '';
  data.lastname = '';
  axios({
    method: 'post',
    data,
    url: `/api/register`,
    headers: header()
  })
  .then((response) => {
    if(response.data.data) {
      even.reset();
      dispatch(registerUserSuccess(response.data.data));
    }else{
      dispatch(registerUserFailed(response.data));
    }
  })
  .catch((error) => {
    dispatch(registerUserFailed(error.message ? error.message : error));
  });
};

export default registrationThunk;
