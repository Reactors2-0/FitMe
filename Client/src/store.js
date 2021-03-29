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
    listProducts,
    Product,
    // productReview,
    // createReview,
    // deleteProduct,
    // createProduct,
    // EditProduct,
} from "./reducers/productReducers";

import {
  createOrderReducer,
  getOrder,
  orderPayReducer,
  orderDeliverReducer,
  authOrders,
  listOrders,
} from "./reducers/orderReducers";




const rootReducer = combineReducers({
    createOrder: createOrderReducer,
  orderDetails: getOrder,
  authOrders: authOrders,
  orderList: listOrders,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  products: listProducts,
  Product: Product,
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
  cart: {
    cartItems: {},
    shippingAddress: {},
    paymentMethod: {},
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
