import { CartTypeActions }  from './cart.type.js'

export const toggleCartDropdown = () => {
  return {
    type: CartTypeActions.TOGGLE_CART_DROPDOWN,
  }
}

export const addItemToCart = (item) => {
  return {
    type: CartTypeActions.ADD_TO_CART,
    payload: item
  }
}

export const removeItemFromCart = (item) => ({
  type: CartTypeActions.REMOVE_FROM_CART,
  payload: item
})
