import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_COOKIECART,
  SET_QUANTITY,
} from './cartActions'

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

export const setCookieCart = (data) => {
  return {
    type: SET_COOKIECART,
    payload: data,
  }
}

export const setQuantity = (data, qty) => {
  return {
    type: SET_QUANTITY,
    payload: { data, qty },
  }
}
