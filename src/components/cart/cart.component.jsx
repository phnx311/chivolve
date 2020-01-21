import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import './cart.styles.scss';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { toggleCartDropdown } from '../../redux/cart/cart.action.js';


const Cart = ({ cart, history, dispatch }) => {

  return (
    <div className='cart'>
      <div className='cart-items'>
        { cart.length ?
        cart.map((cartItem, idx) => (<CartItem item={cartItem} key={idx}/>))
        :
        <span className="empty-cart-message">
         Your Cart Is Empty
        </span>
        }
      </div>
      <CustomButton isDisabled={cart.length ? undefined : 'disabled'} onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartDropdown())
        }}>Go To Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart.cartItems
})

export default withRouter(connect(mapStateToProps, null)(Cart));