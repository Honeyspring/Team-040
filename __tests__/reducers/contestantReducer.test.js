import contestantReducer from '../../src/reducers/contestantReducer/contestantReducer';
import * as types from '../../src/constants/contestantActionTypes';

describe('contestant reducer', () => {
  it('should handle getContestants', () => {
    expect(
      contestantReducer({ contestants: [], loading: false }, { type: types.GET_ALL_CONTESTANT, loading: true })
    ).toEqual({ contestants: [], loading: true });
  });

  it('should handle getContestantsSuccess', () => {
    expect(
      contestantReducer(
        { contestants: [], loading: false },
        {
          type: types.GET_ALL_CONTESTANT_SUCCESS,
          payload: [
            { id: 1, name: 'OYIN BOLA', party: 'RDPC' },
            { id: 2, name: 'PAUL YONTA', party: 'SDF' }
          ],
          loading: false
        }
      )
    ).toEqual({
      contestants: [
        { id: 1, name: 'OYIN BOLA', party: 'RDPC' },
        { id: 2, name: 'PAUL YONTA', party: 'SDF' }
      ],
      loading: false
    });
  });

  it('should handle getContestantsFailed', () => {
    expect(
      contestantReducer(
        { contestants: [], loading: false, error: {} },
        { type: types.GET_ALL_CONTESTANT_ERROR, loading: false, error: 'ERROR OCCURED !'}
      )
    ).toEqual({ contestants: [], loading: false, error: { message: 'ERROR OCCURED !'}});
  });

  it('should handle getContestantsByParty', () => {
    expect(
      contestantReducer(
        {
          contestants: [
            { id: 1, name: 'OYIN BOLA', party: 'RDPC' },
            { id: 2, name: 'PAUL YONTA', party: 'SDF' },
            { id: 3, name: 'BERTRAND TIYA', party: 'RDPC' }
          ],
          contestantsByParty: []
        },
        { type: types.GET_ALL_CONTESTANT_BY_PARTY, party: 'RDPC' }
      )
    ).toEqual({
      contestants: [
        { id: 1, name: 'OYIN BOLA', party: 'RDPC' },
        { id: 2, name: 'PAUL YONTA', party: 'SDF' },
        { id: 3, name: 'BERTRAND TIYA', party: 'RDPC' }
      ],
      contestantsByParty: [
        { id: 1, name: 'OYIN BOLA', party: 'RDPC' },
        { id: 3, name: 'BERTRAND TIYA', party: 'RDPC' }
      ]
    });
  });

  it('should handle getContestantsByCategory', () => {
    expect(
      contestantReducer(
        {
          contestants: [
            { id: 1, name: 'OYIN BOLA', party: 'RDPC' },
            { id: 2, name: 'PAUL YONTA', party: 'SDF' },
            { id: 3, name: 'BERTRAND TIYA', party: 'RDPC' }
          ],
          contestantsByCategory: []
        },
        { type: types.GET_ALL_CONTESTANT_BY_CATEGORY, category: 1 }
      )
    ).toEqual({
      contestants: [
            { id: 1, name: 'OYIN BOLA', party: 'RDPC' },
            { id: 2, name: 'PAUL YONTA', party: 'SDF' },
            { id: 3, name: 'BERTRAND TIYA', party: 'RDPC' }
          ],
      contestantsByCategory: [{ id: 1, name: 'OYIN BOLA', party: 'RDPC' }]
    });
  });
});
