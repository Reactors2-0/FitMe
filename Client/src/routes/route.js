import React,{lazy} from "react"
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom"
import Header from "@FrontOfficeComponents/Header/Header";

import FooterPage from "@Components/Footer/FooterPage";
const DashboardHeader = lazy(() => import('@BackOfficeComponents/VerticalLayout/Header'));
const DashboadFooter = lazy(() => import('@BackOfficeComponents/VerticalLayout/Footer'));
const DashboardSideBar = lazy(() => import('@BackOfficeComponents/VerticalLayout/Sidebar'));

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  isFront,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthProtected && !localStorage.getItem("userInfo")) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
          
         
        )
      }
      if (isFront) {

      return (
        <>
          <Header />
          <Component {...props} />
          <FooterPage />
        </>
      )
    }else{
      return (
        <>
       <DashboardHeader /> 
       <div className="container-fluid">
         <div className="row">
         <div className="col-2">
          <DashboardSideBar/>
          </div>
          <div className="col-10">
          <Component {...props} />

          </div>
         </div>
       </div>
      
         
          <DashboadFooter />
       </>   
      )
    }
    }
    }/>
)

AppRoute.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any
}

export default AppRoute
