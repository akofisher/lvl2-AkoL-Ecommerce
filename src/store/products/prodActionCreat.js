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

export const addProducts = (data, value) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      id: data,
      qty: value,
    },
  }
}

export const removeProducts = (data) => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id: data,
    },
  }
}

export const adjustQty = (data, value) => {
  return {
    type: ADJUST_QUANTITY,
    payload: {
      id: data,
      qty: value,
    },
  }
}

export const loadCurrentItem = (data) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: data,
  }
}
