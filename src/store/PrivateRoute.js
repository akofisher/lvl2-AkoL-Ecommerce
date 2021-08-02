import React, { useContext } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { UserContext } from './UserProvider'
import { LOGIN } from '../routes'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userData = useContext(UserContext)
  let location = useLocation()

  return (
    <Route
      {...rest}
      render={(props) =>
        userData.data.isLogedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: LOGIN,
              state: {
                from: location,
              },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
