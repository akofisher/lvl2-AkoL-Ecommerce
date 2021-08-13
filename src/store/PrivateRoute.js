import React from 'react'
import { Route, Redirect} from 'react-router-dom'
// import { UserContext } from './UserProvider'
import { HOMEPAGE } from '../routes'
import Loader from '../pages/content/RightSide/components/Loader'
import { selectLogedIn } from './user/userSelector'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const userData = useContext(UserContext)
  const USER = localStorage.getItem('token')
  const isLogedIn = useSelector(selectLogedIn)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogedIn || USER ? (
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
