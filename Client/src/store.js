import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

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
    // productReview: productReview,

});


const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
