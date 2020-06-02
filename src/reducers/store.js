/* eslint-disable import/prefer-default-export */
/**
 * @constant initialStore
 * @description initial store of App
 */

export const initialStore = {
  userProfile: {
    userId: 0,
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    phoneNumber: '',
    stateOfOrigin: '',
    localGovt: '',
    profilePicture: '',
    regTime: new Date(),
    votersRegNum: []
  },
  contestants: [],
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
