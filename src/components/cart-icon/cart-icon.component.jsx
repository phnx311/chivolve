import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.action.js';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartDropdown, cartItemsCount }) => (
  <div className='cart-icon' onClick={toggleCartDropdown}>
    < ShoppingIcon className='shopping-icon'/>
<span className='item-count'>{cartItemsCount}</span>
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

const mapStateToProps = ({cart: { cartItems }}) => ({
  cartItemsCount: cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity
  }, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
