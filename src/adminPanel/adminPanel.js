import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminLoyout from '../Loyout/adminLoyout/adminLoyout'
import { ADMIN_PANEL, ADMIN_PRODUCTS } from '../routes'
import PrivateRoute from '../store/PrivateRoute'
import AdminProp from './adminProp/adminProp'

export default function AdminPanel() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path={ADMIN_PRODUCTS} component={AdminProp} />

        <PrivateRoute path={ADMIN_PANEL} component={AdminLoyout} />
      </Switch>
    </Router>
  )
}
