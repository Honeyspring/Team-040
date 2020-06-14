import { combineReducers } from 'redux';
import registerReducer from './registerReducer/registerReducer';
import loginReducer from './loginReducer/loginReducer';
import contestantReducer from './contestantReducer/contestantReducer';

/**
 * @constant RootReducers
 * @description Combine all reducers of app
 */
const rootReducers = combineReducers({ registerReducer, loginReducer, contestantReducer }); // pass all reducers of app

export default rootReducers;
