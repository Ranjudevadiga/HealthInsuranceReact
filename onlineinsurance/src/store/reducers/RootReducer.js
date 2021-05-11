import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import PolicyReducer from './PolicyReducer';
const RootReducer=combineReducers({

    LoginReducer,PolicyReducer
 
});

export default RootReducer;