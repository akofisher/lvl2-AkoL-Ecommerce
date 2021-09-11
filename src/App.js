import React, { useEffect } from 'react'
// import { UserContext } from './store/UserProvider'
// import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminPanel from './adminPanel/adminPanel'
import './App.scss'
import PrivateRoute from './Components/PrivateRoute'
import CartBody from './pages/cartPage/cartLoyout'
import Login from './pages/login&signUp/login'
import SignUp from './pages/login&signUp/SingUp'
import AvatarChange from './pages/privatePages/AvatarChange'
import PrivatePage from './pages/privatePages/PrivatePage'
import Products from './pages/products'
import SecondBody from './pages/secContent/secContent'
import {
  ADMIN_PANEL,
  AVATAR_CHANGE,
  CART_PAGE,
  HOMEPAGE,
  LOGIN,
  PRIVATE,
  SIGN_UP,
  SINGLE_LIST,
} from './routes'
import { getCartProducts } from './store/cart/cartSelector'
import { getCookie, setCookie } from './store/cookiesHelp'
import { isToken } from './store/user/userActions'

function App() {
  // const userData = useContext(UserContext)
  let dispatch = useDispatch()
  const inCart = useSelector(getCartProducts)
  let data = document.cookie

  useEffect(() => {
    dispatch(isToken)
  }, [])
  useEffect(() => {
    if (inCart.length > 0) {
      setCookie('CART', inCart)
    }
  }, [inCart])
  useEffect(() => {
    let Data = getCookie('CART')

    console.log(Data, 'AKOOOOO')
  }, [data])

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={SIGN_UP} component={SignUp} />
          <Route exact path={LOGIN} component={Login} />
          <Route exact path={CART_PAGE} component={CartBody} />
          <PrivateRoute exact path={ADMIN_PANEL} component={AdminPanel} />
          <PrivateRoute exact path={AVATAR_CHANGE} component={AvatarChange} />
          <Route exact path={SINGLE_LIST} component={SecondBody} />
          <PrivateRoute exact path={PRIVATE} component={PrivatePage} />
          <Route exact path={HOMEPAGE} component={Products} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
