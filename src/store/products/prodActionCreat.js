import { SET_PRODUCTS } from './prodActions'

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}
