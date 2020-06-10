import * as types from '../../src/constants/loginActionTypes';
import { loginUser, loginUserSuccess, loginUserFailed } from '../../src/actions/loginAction';

describe('login actions', () => {
  it('sign up should create SIGN_IN action', () => {
    expect(loginUser()).toEqual({
      type: types.SIGN_IN,
      loading: true
    });
  });

  it('sign up success should create SIGN_IN_SUCSESS action', () => {
    expect(
      loginUserSuccess({
        status: 'success',
        token: 'buildForSDGChallenge2020'
      })
    ).toEqual({
      type: types.SIGN_IN_SUCCESS,
      loading: false,
      payload: {
        status: 'success',
        token: 'buildForSDGChallenge2020'
      }
    });
  });

    it('sign up error should create SIGN_IN_ERROR action', () => {
      expect(loginUserFailed('Error Occured !')).toEqual({
        type: types.SIGN_IN_ERROR,
        loading: false,
        error: 'Error Occured !'
      });
    });
  });
  
