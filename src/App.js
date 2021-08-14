import React from 'react'
import './App.scss'
import Products from './pages/products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SecondBody from './pages/secContent/secContent'
import { HOMEPAGE, SINGLE_LIST, ADMIN_PANEL, LOGIN } from './routes'
import AdminPanel from './adminPanel/adminPanel'
import Login from './pages/login&signUp/login'
import { SIGN_UP } from './routes'
import SignUp from './pages/login&signUp/SingUp'
import { PRIVATE } from './routes'
import PrivateRoute from './store/PrivateRoute'
import PrivatePage from './pages/PrivatePage/PrivatePage'
import { Api } from './Hooks/CustomApiHook'
import { useEffect } from 'react'
// import { UserContext } from './store/UserProvider'
// import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { setUser, setLogedIn } from './store/user/userActionsCreator'
import { isToken } from './store/user/userActions'

function App() {
  // const userData = useContext(UserContext)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(isToken)
  }, [])

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={SIGN_UP} component={SignUp} />
          <Route exact path={LOGIN} component={Login} />
          <PrivateRoute exact path={ADMIN_PANEL} component={AdminPanel} />
          <Route exact path={SINGLE_LIST} component={SecondBody} />
          <PrivateRoute exact path={PRIVATE} component={PrivatePage} />
          <Route exact path={HOMEPAGE} component={Products} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
