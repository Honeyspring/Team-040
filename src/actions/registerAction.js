/* eslint-disable import/prefer-default-export */
import * as types from '../constants/registerActionTypes';

/**
 * ACTIONS CREATORS
 */

 /**
  * REGISTER USER
  * @func registerUser
  * @description Action creator indiquely to the app that he makes load the result who will come from the api 
  * @returns object
  */
 export const registerUser = () => ({
   type: types.SIGN_UP,
   loading: true
 });

/**
 * REGISTER USER SUCCESS
 * @func registerUserSuccess
 * @param {object} data 
 * @description Action creator indiquely to the app that the request has been successfully completed
 * @returns object
 */
 export const registerUserSuccess = (data) => ({
   type: types.SIGN_UP_SUCCESS,
   payload: data,
   loading: false
 });

 /**
  * REGISTER USER FAILED
  * @func registerUserFailed
  * @param {string} error 
  * @description Action creator indiquely to the app that the request failed
  * @returns object
  */
 export const registerUserFailed = (error) => ({
   type: types.SIGN_UP_ERROR,
   loading: false,
   error
 });

