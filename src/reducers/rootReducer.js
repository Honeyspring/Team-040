import { combineReducers } from 'redux';
import registerReducer from './registerReducer/registerReducer';
import loginReducer from './loginReducer/loginReducer';

/**
 * @constant RootReducers
 * @description Combine all reducers of app
 */
const rootReducers = combineReducers({ registerReducer, loginReducer }); // pass all reducers of app

export default rootReducers;
