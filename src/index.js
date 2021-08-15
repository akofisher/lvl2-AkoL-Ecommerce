import React from 'react'
import ReactDOM from 'react-dom'
// import { UserProvider } from './store/UserProvider'
import { Provider } from 'react-redux'
import App from './App'
import './index.scss'
import reportWebVitals from './reportWebVitals'
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
