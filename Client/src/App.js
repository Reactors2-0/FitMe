import './App.css';
import Home from "./pages/frontoffice/Home/Home";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/frontoffice/Header/Header";
import FooterPage from "./components/Footer/FooterPage";

function App() {
  return (
      <BrowserRouter>
          <Header />

          <Switch>
              <Route exact={true} path="/" component={Home} />
          </Switch>

          <FooterPage/>
      </BrowserRouter>
  );
}

export default App;
