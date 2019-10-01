import { CartTypeActions } from './cart.type.js';

const INITIAL_STATE = {hidden: true};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypeActions.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default cartReducer;