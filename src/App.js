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

function App() {
  return (
    <Router>
      <Switch>
        <Route path={SIGN_UP} component={SignUp} />
        <Route path={LOGIN} component={Login} />
        <Route path={ADMIN_PANEL} component={AdminPanel} />
        <Route path={SINGLE_LIST} component={SecondBody} />
        <Route path={HOMEPAGE} component={Products} />
      </Switch>
    </Router>
  )
}

export default App
