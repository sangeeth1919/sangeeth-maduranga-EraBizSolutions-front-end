import { combineReducers } from "redux";
import doctorReducer from './doctorReducer';
import appoimentReducer from './appoimentReducer';
export default combineReducers({
    doctors:doctorReducer,
    appoiment:appoimentReducer
})