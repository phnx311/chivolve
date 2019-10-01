import { CartTypeActions }  from './cart.type.js'

const toggleCartDropdown = () => {
  return {
    type: CartTypeActions.TOGGLE_CART_DROPDOWN,
  }
}

export default toggleCartDropdown;