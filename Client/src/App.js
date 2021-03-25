import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Headers from "@Components/frontoffice/Header/Header";
import FooterPage from "@Components/Footer/FooterPage";
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
// * Chihab's imports
const BrandSignup = lazy(() => import('@FrontOfficePages/BrandSignup/BrandSignup'));
const AdminBrandsList = lazy(() => import('@BackOfficePages/AdminBrandsList/AdminBrandsList'));
function App() {
  const isBackOfficePage = window.location.pathname.startsWith('/dashboard');
  return (
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
            </Switch>
          </Suspense>
        </Container>
      </main>
      { !isBackOfficePage ? (<FooterPage />) : (<></>)}
    </BrowserRouter>
  );
}

export default App;
