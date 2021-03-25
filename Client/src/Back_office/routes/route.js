import React from "react"
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom"

const AppRoute = ({
                      component: Component,
                      layout: Layout,
                      isAuthProtected,
                      ...rest
                  }) => (
    <Route
        {...rest}
        render={props => {


            return (
                <Layout>
                    <Component {...props} />
                </Layout>
            )
        }}
    />
)

AppRoute.propTypes = {
    isAuthProtected: PropTypes.bool,
    component: PropTypes.any,
    location: PropTypes.object,
    layout: PropTypes.any
}

export default AppRoute
