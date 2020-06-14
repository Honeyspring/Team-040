/* eslint-disable import/prefer-default-export */
/**
 * @constant initialStore
 * @description initial store of App
 */

export const initialStore = {
  userProfile: {
    userId: 0,
    fullname: '',
    email: '',
    gender: '',
    phoneNumber: '',
    stateOfOrigin: '',
    localGovt: '',
    vin: ''
  },
  users: [],
  contestants: [],
  contestantsByParty: [],
  contestantsByCategory: [],
  votingCategorie: [],
  usersVotes: [],
  resultsVote: {
    totalNumberOfRegisteredVoters: 0,
    votesPerCategories: 0,
    totalNumberOfVotesPerCandidates: 0
  },
  success: {
    message: ''
  },
  error: {},
  loading: false
};
