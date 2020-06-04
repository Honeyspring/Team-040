import { combineReducers } from 'redux';
import registerReducer from './registerReducer/registerReducer';

/**
 * @constant RootReducers
 * @description Combine all reducers of app
 */
const rootReducers = combineReducers({ registerReducer }); // pass all reducers of app

export default rootReducers;
