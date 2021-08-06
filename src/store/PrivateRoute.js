import React, { useContext } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { UserContext } from './UserProvider'
import { HOMEPAGE } from '../routes'
import Loader from '../pages/content/RightSide/components/Loader'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userData = useContext(UserContext)
  const USER = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={(props) =>
        userData.data.isLogedIn || USER ? (
          <Loader>
            <Component {...props} />
          </Loader>
        ) : (
          <Redirect
            to={{
              pathname: HOMEPAGE,
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
