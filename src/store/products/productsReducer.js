import {
  ADD_PRODUCT,
  ADJUST_QUANTITY,
  REMOVE_PRODUCT,
  SET_PRODUCTS,
} from './prodActions'

const initialState = {
  products: [], //id,title,price, img
  cartProducts: [], //id,title,price, img, qty
  currentItem: null,
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    case ADD_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, { ...action.payload, qty: 1 }],
      }

    case REMOVE_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (item) => item.id !== action.payload.id,
        ),
      }
    case ADJUST_QUANTITY:
      return {
        ...state,
        cartProducts: state.cartProducts.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item,
        ),
      }

    default:
      return state
  }
}
