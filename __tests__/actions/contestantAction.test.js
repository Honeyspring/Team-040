import * as types from '../../src/constants/contestantActionTypes'; 
import {
  getContestants,
  getContestantsSuccess,
  getContestantsFailed,
  getContestantsByParty,
  getContestantsByCategory
} from '../../src/actions/contestantAction';

describe('contestant actions', () => {
  it('contestant should create contestant action', () => {
    expect(getContestants()).toEqual({
      type: types.GET_ALL_CONTESTANT,
      loading: true
    });
  });
  
  it('contestant success should create contestant success action', () => {
    expect(getContestantsSuccess([{ id: 1, name: 'OYIN BOLA', party: 'RDPC' }])).toEqual({
      type: types.GET_ALL_CONTESTANT_SUCCESS,
      payload: [
        {
          id: 1,
          name: 'OYIN BOLA',
          party: 'RDPC'
        }
      ],
      loading: false
    });
  });

  it('contestant failed should create contestant failed action', () => {
    expect(getContestantsFailed('ERROR OCCURED !')).toEqual({
      type: types.GET_ALL_CONTESTANT_ERROR,
      error: 'ERROR OCCURED !',
      loading: false
    });
  });

  it('contestant by party should create contestant by party action', () => {
    expect(getContestantsByParty('RDPC')).toEqual({
      type: types.GET_ALL_CONTESTANT_BY_PARTY,
      party: 'RDPC'
    });
  });

  it('contestant by category should create contestant by category action', () => {
    expect(getContestantsByCategory(237)).toEqual({
      type: types.GET_ALL_CONTESTANT_BY_CATEGORY,
      category: 237
    });
  });
});
