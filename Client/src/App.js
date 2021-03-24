import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/frontoffice/Header/Header";
import FooterPage from "./components/Footer/FooterPage";
import Home from "./pages/frontoffice/Home/Home";

import Login from "./pages/frontoffice/LoginRegister/Login";
import Logout from "./pages/frontoffice/LoginRegister/Logout";
import Register from "./pages/frontoffice/LoginRegister/Register";
import ForgotPassword from "./pages/frontoffice/LoginRegister/ForgotPassword";
import ResetPassword from "./pages/frontoffice/LoginRegister/ResetPassword";
import EmailVerification from "./pages/frontoffice/LoginRegister/EmailVerification";

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
