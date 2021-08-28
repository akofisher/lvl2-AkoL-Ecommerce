import {
  ADD_PRODUCT,
  ADJUST_QUANTITY,
  LOAD_CURRENT_ITEM,
  REMOVE_PRODUCT,
  SET_PRODUCTS,
} from './prodActions'

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}

export const addProducts = (cartProducts, value) => {
  return {
    type: ADD_PRODUCT,
    payload: { cartProducts, qty: value },
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

export const loadCurrentItem = (cartProducts) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: cartProducts,
  }
}
