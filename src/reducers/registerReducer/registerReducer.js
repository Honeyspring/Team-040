import { initialStore } from '../store';
import * as types from '../../constants/registerActionTypes';

/**
 * REGISTER REDUCER
 * @func registerReducer
 * @param {object} state
 * @param {object} action
 * @description Reducer for register user feature
 * @returns object
 */
const registerReducer = (state = initialStore, action = {}) => {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state,
        loading: action.loading
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        success: {
          ...state.success,
          message: action.payload.message
        }
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: {
          ...state.error,
          message: action.error
        }
      };
  
    default:
      return state;
  }
};

export default registerReducer;