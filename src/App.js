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
import { UserContext } from './store/UserProvider'
import { useContext } from 'react'

function App() {
  const userData = useContext(UserContext)
  const isToken = () => {
    const token = localStorage.getItem('token')
    if (token) {
      userData.setData({
        ...userData.data,
        isLogedIn: false,
      })
      Api.privatePage()
        .then((json) => {
          userData.setData({
            ...userData.data,
            isLogedIn: true,
            isLogedOut: false,
            user: json,
          })
        })
        .catch((error) => {
          console.log(error)
          localStorage.removeItem('token')
        })
    }
  }

  useEffect(() => {
    isToken()
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path={SIGN_UP} component={SignUp} />
        <Route exact path={LOGIN} component={Login} />
        <Route exact path={ADMIN_PANEL} component={AdminPanel} />
        <Route exact path={SINGLE_LIST} component={SecondBody} />
        <PrivateRoute exact path={PRIVATE} component={PrivatePage} />
        <Route exact path={HOMEPAGE} component={Products} />
      </Switch>
    </Router>
  )
}

export default App
