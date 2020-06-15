import { initialStore } from '../store';
import * as types from '../../constants/contestantActionTypes';


const contestantReducer = (state = initialStore, action = {}) => {
  switch (action.type) {
    case types.GET_ALL_CONTESTANT:
      return {
        ...state,
        loading: action.loading
      };
    case types.GET_ALL_CONTESTANT_SUCCESS:
      return {
        ...state,
        contestants: [...state.contestants, ...action.payload],
        loading: action.loading
      };
    case types.GET_ALL_CONTESTANT_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          message: action.error
        },
        loading: action.loading
      };
    case types.GET_ALL_CONTESTANT_BY_PARTY:
      return {
        ...state,
        contestantsByParty:[...state.contestants.filter((item) => item.party === action.party)]
      };
    case types.GET_ALL_CONTESTANT_BY_CATEGORY:
      return {
        ...state,
        contestantsByCategory: [
          ...state.contestants.filter((item) => item.id === action.category)
        ]
      };
    default:
      return state;
  }
};

export default contestantReducer;