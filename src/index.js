import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// import { UserProvider } from './store/UserProvider'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <UserProvider> */}
      <App />
      {/* </UserProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
