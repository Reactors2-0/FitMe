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
  deleteProduct,
  createProduct,
  EditProduct,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  categoryList,
  Repondre,
  category,
 
} from "./reducers/AdminReducers";
import { ContactList,userContact, Contact } from "./reducers/contactReducers"

import {
  listBrands,
  brandByUserIdCall,
  Brand,
  deleteBrand,
  createBrand,
  editBrand,
  toggleVerify
} from "./reducers/brandReducers";
import {
  createOrderReducer,
  getOrder,
  orderPayReducer,
  orderDeliverReducer,
  authOrders,
  listOrders,
} from "./reducers/orderReducers";




const rootReducer = combineReducers({
  toggleVerify:toggleVerify,
  Contact:Contact,
  listBrands:listBrands,
  brandByUserId:brandByUserIdCall,
  Brand:Brand,
  deleteBrand:deleteBrand,
  createBrand:createBrand,
  editBrand:editBrand,
  ContactList: ContactList,
  userContact:userContact,
  listcategory: categoryList,
  category:category ,
  listrepondre: Repondre,
  createOrder: createOrderReducer,
  orderDetails: getOrder,
  authOrders: authOrders,
  orderList: listOrders,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  products: listProducts,
  Product: Product,
  deleteProduct: deleteProduct,
  createProductDetails: createProduct,
  updateProductDetails: EditProduct,
  cart: cartReducer,
  userLogin: userLogin,
  userRegister: userRegister,
  userList: userList,
  userListBack: userList,
  userDeleteDetails: userDelete,
  userUpdateDetails: userUpdate,
  userDetails: getUser,
  forgotPasswordDetails: forgotPassword,
  resetPasswordDetails: resetPassword,

});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentMethodAddressFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "";
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
