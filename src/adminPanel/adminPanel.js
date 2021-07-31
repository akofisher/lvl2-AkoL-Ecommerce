import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ADMIN_PANEL, ADMIN_PRODUCTS } from '../routes'
import AdminLoyout from '../loyout/adminLoyout/adminLoyout'
import AdminProp from './adminProp/adminProp'

export default function AdminPanel() {
  return (
    <Router>
      <Switch>
        <Route path={ADMIN_PRODUCTS} component={AdminProp} />

        <Route path={ADMIN_PANEL} component={AdminLoyout} />
      </Switch>
    </Router>
  )
}
