import { initialStore } from '../store';
import * as types from '../../constants/loginActionTypes';

/**
 * LOGIN REDUCER
 * @func loginReducer
 * @param {object} state
 * @param {object} action
 * @description Reducer for login user feature
 * @returns object
 */
 const loginReducer = (state = initialStore, action = {}) => {
    switch (action.type) {
      case types.SIGN_IN:
        return {
          ...state,
          loading: action.loading
        };
      case types.SIGN_IN_SUCCESS:
        return {
          ...state,
          loading: action.loading,
          userProfile: {
            ...state.userProfile,
            userId: action.payload.userId
          }
        };
      case types.SIGN_IN_ERROR:
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

 export default loginReducer;