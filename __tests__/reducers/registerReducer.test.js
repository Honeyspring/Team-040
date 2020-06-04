import registerReducer from '../../src/reducers/registerReducer/registerReducer';
import * as types from '../../src/constants/registerActionTypes';


describe('register reducer', () => {
  it('should handle SIGN_UP', () => {
    expect(
      registerReducer(
        {
          success: {
            message: ''
          },
          error: {},
          loading: false
        },
        {
          type: types.SIGN_UP,
          loading: true
        }
      )
    ).toEqual({
      success: {
        message: ''
      },
      error: {},
      loading: true
    });
  });

  it('should handle SIGN_UP_SUCCESS', () => {
    expect(
      registerReducer(
        {
          success: {
            message: ''
          },
          error: {},
          loading: false
        },
        {
          type: types.SIGN_UP_SUCCESS,
          loading: false,
          payload: {
            message: 'User account successfully created',
            token: 'token',
            userId: 1
          }
        }
      )
    ).toEqual({
      success: {
        message: 'User account successfully created'
      },
      error: {},
      loading: false
    });
  });

  it('should handle SIGN_UP_ERROR', () => {
    expect(
      registerReducer(
        {
          success: {
            message: ''
          },
          error: {},
          loading: false
        },
        {
          type: types.SIGN_UP_ERROR,
          loading: false,
          error: 'Error Occured !'
        }
      )
    ).toEqual({
      success: {
        message: ''
      },
      error: {message: 'Error Occured !'},
      loading: false
    });
  });
  
  
});
