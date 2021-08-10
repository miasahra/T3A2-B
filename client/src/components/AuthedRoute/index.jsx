// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from "react"
import PropTypes from "prop-types"
import { Redirect, Route } from "react-router-dom"
import Routes from "../../assets/utils/routes"

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: Routes.Login }} />
      )
    }
  />
)

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.func,
  component: PropTypes.elementType,
}

PrivateRoute.defaultProps = {
  isLoggedIn: null,
  component: null,
}

export default PrivateRoute