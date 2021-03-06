import React from "react"
import { Redirect, Route } from "react-router-dom"
/** SADEK Imports */
import Dashboard from "../backoffice/pages/Dashboard/index"
import ContactAdmin from "../backoffice/pages/Contact/ContactList"
import userlists from "../backoffice/pages/User/UserList"
import OrderAdmin from "../backoffice/pages/Order/Order"
import ProductsList from "../backoffice/pages/Products/index"
import AddProduct from "../backoffice/pages/Products/AddProduct"
import Category from "../backoffice/pages/Category/Category"
import AddCategory from "../backoffice/pages/Category/AddCategory"
import EditCategory from "../backoffice/pages/Category/Editcategory"
import Repondre from "../backoffice/pages/Contact/Repondre"

/** SADEK Imports END*/

import ContactUsPage from "../frontoffice/pages/contact/contact"


// User profile

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
import BrandList from "../backoffice/pages/Brand/BrandtList"
import EditBrand from "../backoffice/pages/Brand/EditBrand"
import Brands from "../frontoffice/pages/Brands/Brands";
import BrandPage from "../frontoffice/pages/Brands/BrandPage";

// * Med Imports *
import Home from "../frontoffice/pages/Home/Home";
import ProductPage from "../frontoffice/pages/ProductDetails/ProductPage";
import ShoppingCart from "../frontoffice/pages/ProductShoppingCart/ShoppingCart";
import EcommerceCheckout from "../frontoffice/pages/Order/Order";

const authProtectedBackRoutes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/dashboard/admin/userlist", component: userlists },

    { path: "/dashboard/admin/Contact", component: ContactAdmin },
    { path: "/dashboard/admin/Repondre/:id", component: Repondre },

    { path: "/dashboard/admin/Category", component: Category },
    { path: "/dashboard/admin/AddCategory", component: AddCategory },
    { path: "/dashboard/admin/EditCategory/:id", component: EditCategory },

    { path: "/dashboard/admin/Products", component: ProductsList },
    { path: "/dashboard/admin/Order", component: OrderAdmin },
    { path: "/dashboard/admin/brands", component: BrandList },
    { path: "/dashboard/admin/brand/:brandId", component: EditBrand },
    //profile
    { path: "/product-detail/:id", component: ProductDetail },
    { path: "/add-product", component: AddProduct },
    // this route should be at the end of all other routes
    { path: "*", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicFrontRoutes = [
    { path: "/contact", component: ContactUsPage },
    { path: "/brands" , component: Brands},
    { path: "/brand/:brandId" , component: BrandPage},
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
    { path: "/ecommerce-checkout", component: EcommerceCheckout },


]
export { authProtectedFrontRoutes, publicFrontRoutes, authProtectedBackRoutes }
