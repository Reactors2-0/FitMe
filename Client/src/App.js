import React , { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "@Components/frontoffice/Header/Header";
import FooterPage from "@Components/Footer/FooterPage";
import LoadingGif from '@Assets/Fidget-spinner.gif'

const Home = lazy(() => import('@FrontOffice/Home/Home'));
const AdminRoute = lazy(() => import('@Routes/AdminRoute'));


const Login = lazy(() => import('@FrontOffice/LoginRegister/Login'));
const Logout =  lazy(() => import('@FrontOffice/LoginRegister/Logout'));
const Register = lazy(() => import('@FrontOffice/LoginRegister/Register'));
const ForgotPassword =  lazy(() => import('@FrontOffice/LoginRegister/ForgotPassword'));
const ResetPassword = lazy(() => import('@FrontOffice/LoginRegister/ResetPassword'));
const EmailVerification = lazy(() => import('@FrontOffice/LoginRegister/EmailVerification'));
// * Chihab's imports
const BrandSignup = lazy(() => import('@FrontOffice/BrandSignup/BrandSignup'));
const AdminBrandsList = lazy(() => import('@BackOffice/AdminBrandsList/AdminBrandsList'));
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
        <Suspense fallback={<img src={LoadingGif} alt="loading..." />}>
          <Switch>
            // * Chihab's routes
            <Route exact={true} path="/brandSignup" component={BrandSignup} />
            <AdminRoute
              exact={true}
              path="/admin/brandList"
              component={AdminBrandsList}
            />
            // * End Chihab's routes
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/forgotPasssword" component={ForgotPassword}/>
            <Route exact={true} path="/resetPassword" component={ResetPassword}/>
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/EmailVerification" component={EmailVerification}/>
            <Route exact={true} path="/logout" component={Logout} />
          </Switch>
          </Suspense>
        </Container>
      </main>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
