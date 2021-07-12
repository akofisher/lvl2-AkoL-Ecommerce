import React from 'react'
import './App.scss'
import Products from './products/Products'
import ShopProd from './secondBody/ShopProd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/shop_product">
          <ShopProd />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
