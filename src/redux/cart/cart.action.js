import { CartTypeActions }  from './cart.type.js/index.js'

const toggleCartDropdown = (status) => {
  return {
    type: CartTypeActions.TOGGLE_CART_DROPDOWN,
    payload: status
  }
}

export default toggleCartDropdown;