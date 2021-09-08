import { ADD_PRODUCT, ADJUST_QUANTITY, REMOVE_PRODUCT } from './cartActions'

const initialState = {
  cartProducts: [],
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, { ...action.payload, qty: 1 }],
      }

    case REMOVE_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (inCart) => inCart.id !== action.payload,
        ),
      }

    case ADJUST_QUANTITY:
      return {
        ...state,
        cartProducts: state.cartProducts.map((item) =>
          item.id === action.payload
            ? { ...item, qty: action.payload.qty }
            : item,
        ),
      }

    default:
      return state
  }
}
