import * as types from '../../src/constants/registerActionTypes';
import { registerUser, registerUserSuccess, registerUserFailed } from '../../src/actions/registerAction';

describe('register actions', () => {
  it('sign up should create SIGN_UP action', () => {
    expect(registerUser()).toEqual({
      type: types.SIGN_UP,
      loading: true
    });
  });

  it('sign up success should create SIGN_UP_SUCSESS action', () => {
    expect(
      registerUserSuccess({
        message: 'registered successfull',
        user_id: 1,
        token: 'buildForSDGChallenge2020'
      })
    ).toEqual({
      type: types.SIGN_UP_SUCCESS,
      loading: false,
      payload: {
        message: 'registered successfull',
        user_id: 1,
        token: 'buildForSDGChallenge2020'
      }
    });
  });

    it('sign up error should create SIGN_UP_ERROR action', () => {
      expect(registerUserFailed('Error Occured !')).toEqual({
        type: types.SIGN_UP_ERROR,
        loading: false,
        error: 'Error Occured !'
      });
    });
  });
  
