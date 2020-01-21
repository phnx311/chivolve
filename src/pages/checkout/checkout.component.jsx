import React from 'react';

import { connect } from 'react-redux';

import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const Checkout = ({ cartItems }) => (

  <div className='checkout'>
    <div className='checkout-header'>
      <div className='checkout-block'>Product</div>
      <div className='checkout-block'>Description</div>
      <div className='checkout-block'>Quantity</div>
      <div className='checkout-block'>Price</div>
      <div className='checkout-block'>Remove</div>
    </div>
    <div className='checkout-items'>
      { cartItems.map((item, idx) => {
        return <CheckoutItem cartItem={item} key={idx}/>
      })}
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