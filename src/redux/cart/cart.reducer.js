import { CartTypeActions } from './cart.type.js';

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
        cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state
  }
}
