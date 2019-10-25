import React from 'react';

import { connect } from 'react-redux';

import './cart.styles.scss';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

const Cart = ({ cart }) => {
  console.log(cart, 'what are we iterating over???' )
  return (
    <div className='cart'>
      <div className='cart-items'>
        {cart.map((cartItem, idx) => (<CartItem item={cartItem} key={idx}/>))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart.cartItems
})

export default connect(mapStateToProps, null)(Cart);