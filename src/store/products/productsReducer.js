import {
  ADD_PRODUCTS,
  ADJUST_QUANTITY,
  LOAD_CURRENT_ITEM,
  REMOVE_PRODUCTS,
  SET_PRODUCTS,
} from './prodActions'

const initialState = {
  products: [], //id,title,decr,price, img
  cartProducts: [], //id,title,decr,price, img, qty
  currentItem: null,
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    case ADD_PRODUCTS:
      const item = state.products.find((prod) => prod.id === action.payload.id)
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false,
      )
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item,
            )
          : [...state.cart, { ...item, qty: 1 }],
      }
    case REMOVE_PRODUCTS:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item,
        ),
      }
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }
    default:
      return state
  }
}
