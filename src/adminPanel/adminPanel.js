import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ADMIN_PANEL } from '../routes'
import AdminLoyout from './adminLoyout/adminLoyout'
import ScrollToTop from '../scroll'

export default function AdminPanel() {
  return (
    <Router>
      <Switch>
        {/* <Route path={ADMIN_PANEL}>
          <ScrollToTop />
          <AdminPanel />
        </Route>
        <Route path={SINGLE_LIST}>
          <ScrollToTop />
          <SecondBody />
        </Route> */}
        <Route path={ADMIN_PANEL}>
          <ScrollToTop />
          <AdminLoyout />
        </Route>
      </Switch>
    </Router>
  )
}
