import React, {lazy , Suspense} from "react"
import PropTypes from 'prop-types'
import {Route, Redirect} from "react-router-dom"

const Header = lazy(() =>  import("@FrontOfficeComponents/Header/Header"));
const FooterPage = lazy(() => import("@Components/Footer/FooterPage"));
const DashboardHeader = lazy(() => import('@BackOfficeComponents/VerticalLayout/Header'));
const DashboadFooter = lazy(() => import('@BackOfficeComponents/VerticalLayout/Footer'));
const DashboardSideBar = lazy(() => import('@BackOfficeComponents/VerticalLayout/Sidebar'));
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const toggleMenuCallback = () => {
    if (props.leftSideBarType === "default") {
        props.changeSidebarType("condensed", isMobile)
    } else if (props.leftSideBarType === "condensed") {
        props.changeSidebarType("default", isMobile)
    }
}
const AppRoute = ({

                      component: Component,
                      layout: Layout,
                      isAuthProtected,
                      isFront,
                      ...rest
                  }) => (
    <Suspense>

    <Route
        {...rest}
        render={props => {
            if (isAuthProtected && !localStorage.getItem("userInfo")) {
                return (
                    <Redirect
                        to={{pathname: "/login", state: {from: props.location}}}
                    />
                )
            }
            if (isFront) {
                return (
                    <>
                        <Header/>
                        <Component {...props} />
                        <FooterPage/>
                    </>
                )
            } else {
                return (
                    <>
                        <DashboardHeader toggleMenuCallback={toggleMenuCallback}/>
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
                        <DashboadFooter/>
                    </>
                )
            }
        }
    }/>
    </Suspense>
)

AppRoute.propTypes = {
    isAuthProtected: PropTypes.bool,
    component: PropTypes.any,
    location: PropTypes.object,
    layout: PropTypes.any
}

export default AppRoute
