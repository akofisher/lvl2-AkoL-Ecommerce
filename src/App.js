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
import { addProducts } from './store/cart/cartActionCreat'
import { getCartProducts } from './store/cart/cartSelector'
import { getCookie } from './store/cookiesHelp'
import { isToken } from './store/user/userActions'
import { setLogedIn } from './store/user/userActionsCreator'
import { selectLogedIn } from './store/user/userSelector'

function App() {
  // const userData = useContext(UserContext)
  let dispatch = useDispatch()
  const inCart = useSelector(getCartProducts)
  const isLogedIn = useSelector(selectLogedIn)
  let data = document.cookie

  useEffect(() => {
    dispatch(isToken)
    if (isToken) {
      dispatch(setLogedIn(true))
    }
  }, [])
  // useEffect(() => {
  //   if (isLogedIn) {
  //     setCookie('CART', inCart, 3)
  //   }
  // }, [inCart])
  useEffect(() => {
    let Data = getCookie('CART')
    let cartData = JSON.parse(Data)
    if (cartData.length > 0) {
      let inTheCart = cartData.map((datachka) => datachka)
      dispatch(
        addProducts({
          title: inTheCart.title,
          price: inTheCart.price,
          id: inTheCart.id,
          image: inTheCart.image,
        }),
      )
    }

    console.log(cartData, 'AKOOOOO')
  }, [])

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
