import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from "@FrontOfficeComponents/Loader/HomeLoader"

import { publicFrontRoutes, authProtectedBackRoutes } from "./routes/index"
import AppRoute from "./routes/route"
import VerticalLayout from "@BackOfficeComponents/VerticalLayout/"

// Dashboard imports

function App() {
  return (
    <Suspense fallback={<img src={Loader} alt="Loading..."/>}>
      <React.Fragment>
        <Router>
          <Switch>
            {publicFrontRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                layout={VerticalLayout}
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
                layout={VerticalLayout}
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
  );
}

export default App;
