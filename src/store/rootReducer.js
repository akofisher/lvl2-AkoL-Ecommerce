import { combineReducers } from 'redux'
import {
  default as cartProducts,
  default as products,
} from './products/productsReducer'
import user from './user/userReducer'

const rootReducer = combineReducers({
  user,
  products,
  cartProducts,
})

export default rootReducer
