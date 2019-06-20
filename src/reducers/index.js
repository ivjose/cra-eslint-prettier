import { combineReducers } from 'redux';
import loginReducers from 'containers/Login/reducers';

const rootReducer = combineReducers({
  auth: loginReducers.authentication
});
export default rootReducer;
