import React from "react"
import { Redirect, Route } from "react-router-dom"
/** SADEK Imports */
import Dashboard from "../backoffice/pages/Dashboard/index"
import ContactAdmin from "../backoffice/pages/Contact/ContactList"
import userlists from "../backoffice/pages/User/UserList"
import OrderAdmin from "../backoffice/pages/Order/Order"
import ProductsList from "../backoffice/pages/Products/index"
import BrandList from "../backoffice/pages/Brand/BrandtList"
import AddProduct from "../backoffice/pages/Products/AddProduct"
import Category from "../backoffice/pages/Category/Category"
import AddCategory from "../backoffice/pages/Category/AddCategory"
import EditCategory from "../backoffice/pages/Category/Editcategory"

/** SADEK Imports END*/



// User profile
import UserProfile from "../backoffice/pages/Authentication/UserProfile"

import ProductDetail from "../backoffice/pages/Products/ProductDetail"




/** Moetaz Brayek Imports */
import Login from '../frontoffice/pages/LoginRegister/Login';
import Logout from '../frontoffice/pages/LoginRegister/Logout';
import Register from '../frontoffice/pages/LoginRegister/Register';
import ForgotPassword from '../frontoffice/pages/LoginRegister/ForgotPassword';
import ResetPassword from '../frontoffice/pages/LoginRegister/ResetPassword';
import EmailVerification from '../frontoffice/pages/LoginRegister/EmailVerification';
/** cyrine imports */
import Profile from '../frontoffice/pages/Order/Profile';

// * Chihab's imports
import BrandSignup from '../frontoffice/pages/BrandSignup/BrandSignup';


// * Med Imports *

import Home from "../frontoffice/pages/Home/Home";
import ProductPage from "../frontoffice/pages/ProductDetails/ProductPage";
import ShoppingCart from "../frontoffice/pages/ProductShoppingCart/ShoppingCart";


const authProtectedBackRoutes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/dashboard/admin/userlist", component: userlists },

    { path: "/dashboard/admin/Repondre", component: ContactAdmin },
    { path: "/dashboard/admin/Category", component: Category },
    { path: "/dashboard/admin/AddCategory", component: AddCategory },
    { path: "/dashboard/admin/EditCategory/:id", component: EditCategory },

    { path: "/dashboard/admin/Products", component: ProductsList },

    { path: "/dashboard/admin/Order", component: OrderAdmin },
    { path: "/dashboard/admin/brand", component: BrandList },

    //profile

    { path: "/product-detail/:id", component: ProductDetail },


    { path: "/add-product", component: AddProduct },


 

    // this route should be at the end of all other routes
    { path: "*", exact: true, component: () => <Redirect to="/dashboard" /> },

]

const publicFrontRoutes = [

    { path: "/brandSignup", component: BrandSignup },
    { path: "/", component: Home },
    // Moetaz Paths
    { path: "/logout", component: Logout },
    { path: "/login", component: Login },
    { path: "/ForgotPasssword", component: ForgotPassword },
    { path: "/register", component: Register },
    { path: "/EmailVerification", component: EmailVerification },
    { path: "/resetPassword", component: ResetPassword },
    { path: "/Profile", component: Profile },
    // Authentication Inner


    //Product path
    { path: "/product/:id", component: ProductPage },
    { path: "/shoppingCart", component: ShoppingCart },

]
const authProtectedFrontRoutes = [


]
export { authProtectedFrontRoutes, publicFrontRoutes, authProtectedBackRoutes }
