import React from 'react';

import { connect } from 'react-redux';

import './checkout.styles.scss';

const Checkout = ({ cartItems }) => (

  <div className='checkout'>
    <div className='checkout-header'>
      <div className='checkout-product checkout-header-title'>Product</div>
      <div className='checkout-description checkout-header-title'>Description</div>
      <div className='checkout-quantity checkout-header-title'>Quantity</div>
      <div className='checkout-price checkout-header-title'>Price</div>
      <div className='checkout-remove checkout-header-title'>Remove</div>
    </div>
    <div className='checkout-items'>
      checkout items
    </div>
    <div className='total'>
      TOTAL: ${ cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price
      }, 0) }
    </div>
  </div>

)

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps, null)(Checkout);