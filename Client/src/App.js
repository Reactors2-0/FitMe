import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from "react-bootstrap";
import FooterPage from "@Components/Footer/FooterPage";
<<<<<<< HEAD
import LoadingGif from '@Assets/Fidget-spinner.gif'
//import Headers from "./pages/backoffice/VerticalLayout/Header"
const Home = lazy(() => import('@FrontOfficePages/Home/Home'));
const AdminRoute = lazy(() => import('@Routes/AdminRoute'));

/** Moetaz Brayek Imports */
const Login = lazy(() => import('@FrontOfficePages/LoginRegister/Login'));
const Logout = lazy(() => import('@FrontOfficePages/LoginRegister/Logout'));
const Register = lazy(() => import('@FrontOfficePages/LoginRegister/Register'));
const ForgotPassword = lazy(() => import('@FrontOfficePages/LoginRegister/ForgotPassword'));
const ResetPassword = lazy(() => import('@FrontOfficePages/LoginRegister/ResetPassword'));
const EmailVerification = lazy(() => import('@FrontOfficePages/LoginRegister/EmailVerification'));

/* Cyrine Imports */
const OrderList = lazy(() => import('@FrontOfficePages/Order/OrderList'));
const Order = lazy(() => import('@FrontOfficePages/Order/Order'));
const Profile = lazy(() => import('@FrontOfficePages/Order/Profile'));

//const Order = lazy(() => import('@FrontOfficePages/Order/Order'));


// * Chihab's imports
const BrandSignup = lazy(() => import('@FrontOfficePages/BrandSignup/BrandSignup'));
const AdminBrandsList = lazy(() => import('@BackOfficePages/AdminBrandsList/AdminBrandsList'));
=======
import Loader from "@FrontOfficeComponents/Loader/HomeLoader"

import { publicFrontRoutes ,authProtectedBackRoutes } from "./routes/index"
import AppRoute from "./routes/route"
import VerticalLayout from "@BackOfficeComponents/VerticalLayout/"

// Dashboard imports

const Dashboard = lazy(() => import('@BackOfficePages/Dashboard'));
const DashboardSideBar = lazy(() => import('@BackOfficeComponents/VerticalLayout/Sidebar'));
>>>>>>> 71a6d577d8e453d152d1de8e1b3f3ef4106afee8
function App() {
  const isBackOfficePage = window.location.pathname.startsWith('/dashboard');
  console.log(isBackOfficePage)
  const Layout = VerticalLayout;
  return (
<<<<<<< HEAD
    <BrowserRouter>
      { !isBackOfficePage ? (<Headers />) : (<></>)}
      <main className="py-3">
        <Container>
          <Suspense fallback={<img src={LoadingGif} alt="loading..." />}>
            <Switch>
              // * Chihab's routes
            <Route exact={true} path="/brandSignup" component={BrandSignup} />
              <AdminRoute exact={true} path="/admin/brandList" component={AdminBrandsList} />
            // * End Chihab's routes

            //* brayek routes
            <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/forgotPasssword" component={ForgotPassword} />
              <Route exact={true} path="/resetPassword" component={ResetPassword} />
              <Route exact={true} path="/register" component={Register} />
              <Route exact={true} path="/EmailVerification" component={EmailVerification} />
              <Route exact={true} path="/logout" component={Logout} />
               // * End Brayek routes
               //* Cyrine Routes */
               <Route exact={true} path="/Profile" component={Profile} />
            </Switch>
          </Suspense>
        </Container>
      </main>
      { !isBackOfficePage ? (<FooterPage />) : (<></>)}
    </BrowserRouter>
=======
    <Suspense fallback={<img src={Loader} />}>
 
         <React.Fragment>
        <Router>
      
          <Switch>

          {publicFrontRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
                isAuthProtected={false}
                isFront={true}
                exact
              />
         
            ))}

            {authProtectedBackRoutes.map((route, idx) => (

              <AppRoute
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
                isAuthProtected={false}
                isFront={false}

                exact
              />

            ))}


        
          
          </Switch>

        </Router>
      </React.Fragment>
    </Suspense>
>>>>>>> 71a6d577d8e453d152d1de8e1b3f3ef4106afee8
  );
}

export default App;
