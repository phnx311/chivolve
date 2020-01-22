import { CartTypeActions } from './cart.type.js';
import { addItemToCart } from './cart.utils.js';
import { removeItemFromCart } from './cart.utils.js';

const INITIAL_STATE = {hidden: true, cartItems:[]};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypeActions.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartTypeActions.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
      case CartTypeActions.REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        }
    default:
      return state
  }
}
