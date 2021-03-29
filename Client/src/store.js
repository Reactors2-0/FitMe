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

import {
Repondre
} from "./reducers/AdminReducers";
import {
    listProducts,
    Product,
    // productReview,
    // createReview,
    // deleteProduct,
    // createProduct,
    // EditProduct,
} from "./reducers/productReducers";






const rootReducer = combineReducers({
  products: listProducts,
  Product: Product,
  userLogin: userLogin,
  userRegister: userRegister,
  userList: userList,
  userListBack: userList,
  userDeleteDetails: userDelete,
  userUpdateDetails: userUpdate,
  userDetails: getUser,
  forgotPasswordDetails: forgotPassword,
  Repondre :Repondre,
  resetPasswordDetails: resetPassword,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
  cart: {
    cartItems: {},
    shippingAddress: {},
    paymentMethod: {},
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
