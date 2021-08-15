import { combineReducers } from 'redux'
import products from './products/productsReducer'
import user from './user/userReducer'

const rootReducer = combineReducers({
  user,
  products,
})

export default rootReducer
