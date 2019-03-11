import { combineReducers } from 'redux';
import MyProfileReducer from './Services/reducer'

export default combineReducers({
    home: MyProfileReducer
  });