import React from "react"
import {Redirect, Route} from "react-router-dom"
/** SADEK Imports */
import Dashboard from "../backoffice/pages/DashboardAdmin/index"
import ContactAdmin from "../backoffice/pages/Contact/ContactList"
import  userlists from "../backoffice/pages/User/UserList"
import OrderAdmin from "../backoffice/pages/Order/Order"
import ProductsList from "../backoffice/pages/Products/index"
import BrandList from "../backoffice/pages/Brand/BrandtList"
import AddProduct from "../backoffice/pages/Products/AddProduct"

/** SADEK Imports END*/

// Pages Component
//import Chat from "../backoffice/pages/Chat/Chat"


// User profile
import UserProfile from "../backoffice/pages/Authentication/UserProfile"

//Ecommerce Pages
import EcommerceProducts from "../backoffice/pages/Ecommerce/EcommerceProducts/index"
import EcommerceProductDetail from "../backoffice/pages/Ecommerce/EcommerceProducts/EcommerceProductDetail"
import EcommerceOrders from "../backoffice/pages/Ecommerce/EcommerceOrders/index"
//import EcommerceCustomers from "../backoffice/pages/Ecommerce/EcommerceCustomers/index"
import EcommerceCart from "../backoffice/pages/Ecommerce/EcommerceCart"
import EcommerceCheckout from "../backoffice/pages/Ecommerce/EcommerceCheckout"
import EcommerceShops from "../backoffice/pages/Ecommerce/EcommerceShops/index"
import EcommerceAddProduct from "../backoffice/pages/Ecommerce/EcommerceAddProduct"

// Inner Authentication
import LockScreen from "../backoffice/pages/AuthenticationInner/auth-lock-screen"
import LockScreen2 from "../backoffice/pages/AuthenticationInner/auth-lock-screen-2"
import ConfirmMail from "../backoffice/pages/AuthenticationInner/page-confirm-mail"
import ConfirmMail2 from "../backoffice/pages/AuthenticationInner/page-confirm-mail-2"
import TwostepVerification from "../backoffice/pages/AuthenticationInner/auth-two-step-verification"
import TwostepVerification2 from "../backoffice/pages/AuthenticationInner/auth-two-step-verification-2"

// Dashboard

// Charts
import ChartApex from "../backoffice/pages/Charts/Apexcharts"
import ChartistChart from "../backoffice/pages/Charts/ChartistChart"
import ChartjsChart from "../backoffice/pages/Charts/ChartjsChart"
import EChart from "../backoffice/pages/Charts/EChart"
import SparklineChart from "../backoffice/pages/Charts/SparklineChart"
import ToastUIChart from "../backoffice/pages/Charts/ToastUIChart"
import ChartsKnob from "../backoffice/pages/Charts/charts-knob"


/** Moetaz Brayek Imports */
import Login from '../frontoffice/pages/LoginRegister/Login';
import Logout from '../frontoffice/pages/LoginRegister/Logout';
import Register from '../frontoffice/pages/LoginRegister/Register';
import ForgotPassword from '../frontoffice/pages/LoginRegister/ForgotPassword';
import ResetPassword from '../frontoffice/pages/LoginRegister/ResetPassword';
import EmailVerification from '../frontoffice/pages/LoginRegister/EmailVerification';

// * Chihab's imports
import BrandSignup from '../frontoffice/pages/BrandSignup/BrandSignup';


// * Med Imports *

import Home from "../frontoffice/pages/Home/Home";
import ProductPageu from "../frontoffice/pages/ProductDetails/ProductPage";

import('../frontoffice/pages/Home/Home');
import('@Routes/AdminRoute');

const authProtectedBackRoutes = [
    { path: "/dashboard/admin", component: Dashboard },
    { path:"/dashboard/admin/userlist", component :userlists},

    { path: "/dashboard/admin/Repondre", component: ContactAdmin },

    { path: "/dashboard/admin/Products", component: ProductsList },
    { path: "/dashboard/admin/AddProducts", component: AddProduct },

    { path: "/dashboard/admin/Order", component: OrderAdmin },
    { path: "/dashboard/admin/Brand", component: BrandList },

    //profile
    { path: "/profile", component: UserProfile },
    //chat

    //Ecommerce
    // { path: "/ecommerce-products/:id", component: EcommerceProducts },
    { path: "/ecommerce-products", component: EcommerceProducts },
    //{ path: "/ecommerce-product-detail/:id", component: EcommerceProductDetail },

    { path: "/ecommerce-orders", component: EcommerceOrders },
//    { path: "/ecommerce-customers", component: EcommerceCustomers },
    { path: "/ecommerce-cart", component: EcommerceCart },
    { path: "/ecommerce-checkout", component: EcommerceCheckout },
    //{ path: "/ecommerce-shops", component: EcommerceShops },
    { path: "/ecommerce-add-product", component: EcommerceAddProduct },

    //Charts
    { path: "/apex-charts", component: ChartApex },
    { path: "/chartist-charts", component: ChartistChart },
    { path: "/chartjs-charts", component: ChartjsChart },
    { path: "/e-charts", component: EChart },
    { path: "/sparkline-charts", component: SparklineChart },
    { path: "/tui-charts", component: ToastUIChart },
    { path: "/charts-knob", component: ChartsKnob },

    { path: "/brandSignup", component: BrandSignup },
    // this route should be at the end of all other routes
     { path: "*", exact: true, component: () => <Redirect to = "/dashboard" /> },

]

const publicFrontRoutes = [

    { path: "/", component: Home },
    // Moetaz Paths
    { path: "/logout", component: Logout },
    { path: "/login", component: Login },
    { path: "/ForgotPasssword", component: ForgotPassword },
    { path: "/register", component: Register },
    { path: "/EmailVerification", component: EmailVerification },
    { path: "/resetPassword", component: ResetPassword },

    // Authentication Inner
    { path: "/auth-lock-screen", component: LockScreen },
    { path: "/auth-lock-screen-2", component: LockScreen2 },
    { path: "/page-confirm-mail", component: ConfirmMail },
    { path: "/page-confirm-mail-2", component: ConfirmMail2 },
    { path: "/auth-two-step-verification", component: TwostepVerification },
    { path: "/auth-two-step-verification-2", component: TwostepVerification2 },

    //Product path
    { path: "/product/:id", component: ProductPageu },

]
const authProtectedFrontRoutes = [


]
export { authProtectedFrontRoutes, publicFrontRoutes, authProtectedBackRoutes }
