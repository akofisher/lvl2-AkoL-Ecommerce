import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ADMIN_PANEL, ADMIN_PRODUCTS } from '../routes'
import AdminLoyout from './adminLoyout/adminLoyout'
import ScrollToTop from '../scroll'
import AdminProp from './adminProp/adminProp'

export default function AdminPanel() {
  return (
    <Router>
      <Switch>
        <Route path={ADMIN_PRODUCTS}>
          <ScrollToTop />
          <AdminProp />
        </Route>
        <Route path={ADMIN_PANEL}>
          <ScrollToTop />
          <AdminLoyout />
        </Route>
      </Switch>
    </Router>
  )
}
