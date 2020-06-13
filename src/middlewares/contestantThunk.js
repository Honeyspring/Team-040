import axios from 'axios';
import { header, API_CODE_ERROR } from '../constants/APIConfig';
import { getContestants, getContestantsSuccess, getContestantsFailed } from '../actions/contestantAction';


const contestantThunk = () => (dispacth) => {
  dispacth(getContestants());
  axios({
    method: 'get',
    url: '/api/contestant',
    headers: header()
  })
  .then((response) => {
    if(response.data[0]){
      dispacth(getContestantsSuccess(response.data));
    }
  })
  .catch((error) => {
    switch (error.status) {
      case 500:
        dispacth(getContestantsFailed('We Encountered An Internal Error, Try Again...'));
        break;
      case 404:
        dispacth(getContestantsFailed('No Contestant Has Been Registered'));
        break;
      case 403:
        dispacth(getContestantsFailed('You\'re Not Authorized To View This Profile, As You\'re Not Logged In With Correct Token...'));
        break;
      default:
        dispacth(getContestantsFailed(error.message ? error.message : API_CODE_ERROR[error.status]));
        break;
    }
  });
};

export default contestantThunk;