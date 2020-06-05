import loginReducer from '../../src/reducers/loginReducer/loginReducer';
import * as types from '../../src/constants/loginActionTypes';

describe('login reducer', () => {
  it('should handle SIGN_IN', () => {
    expect(
      loginReducer(
        {
          error: {},
          loading: false
        },
        {
          type: types.SIGN_IN,
          loading: true
        }
      )
    ).toEqual({
      error: {},
      loading: true
    });
  });

  it('should handle SIGN_IN_SUCCESS', () => {
    expect(
      loginReducer(
        {
          error: {},
          loading: false
        },
        {
          type: types.SIGN_IN_SUCCESS,
          loading: false,
          payload: {
            status: 'success',
            token: 'token'
          }
        }
      )
    ).toEqual({
      error: {},
      loading: false
    });
  });

  it('should handle SIGN_IN_ERROR', () => {
    expect(
      loginReducer(
        {
          error: {},
          loading: false
        },
        {
          type: types.SIGN_IN_ERROR,
          loading: false,
          error: 'Error Occured !'
        }
      )
    ).toEqual({
      error: { message: 'Error Occured !' },
      loading: false
    });
  });
});
