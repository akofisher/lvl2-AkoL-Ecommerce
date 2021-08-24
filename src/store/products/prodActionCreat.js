import {
  ADD_PRODUCTS,
  ADJUST_QUANTITY,
  LOAD_CURRENT_ITEM,
  REMOVE_PRODUCTS,
  SET_PRODUCTS,
} from './prodActions'

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}

export const addProducts = (itemID) => {
  return {
    type: ADD_PRODUCTS,
    payload: {
      id: itemID,
    },
  }
}

export const removeProducts = (itemID) => {
  return {
    type: REMOVE_PRODUCTS,
    payload: {
      id: itemID,
    },
  }
}

export const adjustQty = (itemID, value) => {
  return {
    type: ADJUST_QUANTITY,
    payload: {
      id: itemID,
      qty: value,
    },
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  }
}
