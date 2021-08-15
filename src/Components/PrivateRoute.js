import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
// import { UserContext } from './UserProvider'
import { HOMEPAGE } from '../routes'
import { selectLogedIn } from '../store/user/userSelector'
import Loader from './Loader'

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const userData = useContext(UserContext)
  const TOKEN = localStorage.getItem('token')
  const isLogedIn = useSelector(selectLogedIn)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogedIn || TOKEN ? (
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
