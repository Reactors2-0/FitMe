import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from "@Components/frontoffice/Header/Header";
import FooterPage from "@Components/Footer/FooterPage";
import Loader from "@FrontOfficeComponents/Loader/HomeLoader"

import { authProtectedFrontRoutes, publicFrontRoutes ,authProtectedBackRoutes } from "./routes/"
import AppRoute from "./routes/route"
import VerticalLayout from "@BackOfficeComponents/VerticalLayout/"

// Dashboard imports

const Dashboard = lazy(() => import('@BackOfficePages/Dashboard'));
const DashboardSideBar = lazy(() => import('@BackOfficeComponents/VerticalLayout/Sidebar'));
function App() {
  const isBackOfficePage = window.location.pathname.startsWith('/dashboard');
  console.log(isBackOfficePage)
  const Layout = VerticalLayout;
  return (
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
              <>
              <AppRoute
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
                isAuthProtected={true}
                isFront={false}

                exact
              />
              </>
            ))}
            {/* {authProtectedFrontRoutes.map((route, idx) => (
                <>
              <AppRoute
                path={route.path}
                layout={NonAuthLayout}
                component={route.component}
                key={idx}
                isFront={true}

                isAuthProtected={true}
              />
              </>
            ))} */}

        
          
          </Switch>

        </Router>
      </React.Fragment>
    </Suspense>
  );
}

export default App;
