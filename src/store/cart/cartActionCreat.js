import { ADD_PRODUCT, ADJUST_QUANTITY, REMOVE_PRODUCT } from './cartActions'

export const addProducts = (cartProducts) => {
  return {
    type: ADD_PRODUCT,
    payload: cartProducts,
  }
}

export const removeProducts = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  }
}

export const adjustQty = (id, value) => {
  return {
    type: ADJUST_QUANTITY,
    payload: {
      id,
      qty: value,
    },
  }
}
