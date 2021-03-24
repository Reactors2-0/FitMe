import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "@Components/frontoffice/Header/Header";
import FooterPage from "@Components/Footer/FooterPage";
import Home from "@FrontOffice/Home/Home";

import Login from "@FrontOffice/LoginRegister/Login";
import Logout from "@FrontOffice/LoginRegister/Logout";
import Register from "@FrontOffice/LoginRegister/Register";
import ForgotPassword from "@FrontOffice/LoginRegister/ForgotPassword";
import ResetPassword from "@FrontOffice/LoginRegister/ResetPassword";
import EmailVerification from "@FrontOffice/LoginRegister/EmailVerification";
// * Chihab's imports
import BrandSignup from "@FrontOffice/BrandSignup/BrandSignup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/login" component={Login} />
            <Route
              exact={true}
              path="/forgotPasssword"
              component={ForgotPassword}
            />
            <Route
              exact={true}
              path="/resetPassword"
              component={ResetPassword}
            />
            <Route exact={true} path="/register" component={Register} />
            <Route
              exact={true}
              path="/EmailVerification"
              component={EmailVerification}
            />
            <Route exact={true} path="/logout" component={Logout} />
          </Switch>
        </Container>
      </main>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
