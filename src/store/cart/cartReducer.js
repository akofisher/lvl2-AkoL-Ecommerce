import { ADD_PRODUCT, ADJUST_QUANTITY, REMOVE_PRODUCT } from './cartActions'

const initialState = {
  cartProducts: [], //id,title,price, img, qty
  currentItem: null,
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, { ...action.payload, qty: 1 }],
      }

    case REMOVE_PRODUCT: {
      const index = state.cartProducts.findIndex(
        (inCart) => inCart.id === action.payload.id,
      )

      console.log(index, 'akoo')
      return state.cartProducts.filter((i) => i !== index)
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
