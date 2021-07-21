import React from 'react'
import './App.scss'
import Products from './pages/products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SecondBody from './pages/secContent/secContent'
import { HOMEPAGE, SINGLE_LIST, ADMIN_PANEL, LOGIN } from './routes'
import ScrollToTop from './scroll'
import AdminPanel from './adminPanel/adminPanel'
import Login from './pages/login&signUp/login'
import { SIGN_UP } from './routes'
import SignUp from './pages/login&signUp/SingUp'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={SIGN_UP}>
          <ScrollToTop />
          <SignUp />
        </Route>
        <Route path={LOGIN}>
          <ScrollToTop />
          <Login />
        </Route>
        <Route path={ADMIN_PANEL}>
          <ScrollToTop />
          <AdminPanel />
        </Route>
        <Route path={SINGLE_LIST}>
          <ScrollToTop />
          <SecondBody />
        </Route>
        <Route path={HOMEPAGE}>
          <ScrollToTop />
          <Products />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
