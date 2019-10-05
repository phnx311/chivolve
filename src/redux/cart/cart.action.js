import { CartTypeActions }  from './cart.type.js'

export const toggleCartDropdown = () => {
  return {
    type: CartTypeActions.TOGGLE_CART_DROPDOWN,
  }
}

export const addToCart = (item) => {
  return {
    type: CartTypeActions.ADD_TO_CART,
    payload: item
  }
}
