import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import PolicyReducer from './PolicyReducer';
import UserReducer from './UserReducer'
const RootReducer=combineReducers({

    LoginReducer,PolicyReducer,UserReducer
 
});

export default RootReducer;