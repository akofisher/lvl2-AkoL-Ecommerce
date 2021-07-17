import React from 'react'
import './App.scss'
import Products from './products/products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SecondBody from './secContent/secContent'
import { HOMEPAGE, SINGLE_LIST, ADMIN_PANEL } from './routes'
import ScrollToTop from './scroll'
import AdminPanel from './adminPanel/adminPanel'

function App() {
  return (
    <Router>
      <Switch>
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
