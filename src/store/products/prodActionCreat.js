import {
  ADD_PRODUCT,
  ADJUST_QUANTITY,
  REMOVE_PRODUCT,
  SET_PRODUCTS,
} from './prodActions'

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}

export const addProducts = (cartProducts) => {
  return {
    type: ADD_PRODUCT,
    payload: cartProducts,
  }
}

export const removeProducts = (cartProducts) => {
  return {
    type: REMOVE_PRODUCT,
    payload: cartProducts,
  }
}

export const adjustQty = (cartProducts, value) => {
  return {
    type: ADJUST_QUANTITY,
    payload: {
      id: cartProducts,
      qty: value,
    },
  }
}
