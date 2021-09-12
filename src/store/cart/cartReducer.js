import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_COOKIECART,
  SET_QUANTITY,
} from './cartActions'

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

    case SET_QUANTITY:
      var data = [...state.cartProducts]
      data.find((x) => x.id === action.payload.data.id).qty = action.payload.qty

      return {
        ...state,
        cartProducts: [...data],
      }

    case SET_COOKIECART:
      return {
        ...state,
        cartProducts: [...action.payload],
      }

    default:
      return state
  }
}
