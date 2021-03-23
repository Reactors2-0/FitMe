import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  userLogin,
  userRegister,
  userList,
  userDelete,
  userUpdate,
  getUser,
  forgotPassword,
  resetPassword,
} from "./reducers/userReducers";

const rootReducer = combineReducers({

  userLogin: userLogin,
  userRegister: userRegister,

  userList: userList,
  userDeleteDetails: userDelete,
  userUpdateDetails: userUpdate,
  userDetails: getUser,
  forgotPasswordDetails: forgotPassword,
  resetPasswordDetails: resetPassword,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {

  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
