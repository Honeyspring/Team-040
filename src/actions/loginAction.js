/* eslint-disable import/prefer-default-export */
import * as types from '../constants/loginActionTypes';

/**
 * ACTIONS CREATORS
 */

 /**
  * LOGIN USER
  * @func loginUser
  * @description Action creator indiquely to the app that he makes load the result who will come from the api at login action moment
  * @returns object
  */
export const loginUser = () => ({
  type: types.SIGN_IN,
  loading: true
});

/**
 * LOGIN USER SUCCESS
 * @func loginUserSuccess
 * @param {object} data 
 * @description Action creator indiquely to the app that the request has been successfully completed
 * @returns object
 */
export const loginUserSuccess = (data) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: data,
  loading: false
});

/**
 * LOGIN USER FAILED
 * @func loginUserFailed
 * @param {string} error
 * @description Action creator indiquely to the app that the request failed
 * @returns object
 */
export const loginUserFailed = (error) => ({
  type: types.SIGN_IN_ERROR,
  loading: false,
  error
});