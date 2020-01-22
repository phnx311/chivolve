import React from 'react';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem }) => {
  console.log(cartItem)
  return(

  <div className="checkout-item">
    <div className ='image-container'>
      <img src={cartItem.imageUrl} alt="item"/>
    </div>
    <span className='name'>{cartItem.name}</span>
    <span className='quantity'>{cartItem.quantity}</span>
    <span className='price'>${cartItem.price}</span>
    <span className='remove-button' onClick={() => {removeItem(cartItem)}}>&#10005;</span>
  </div>

)}

const mapDispatchToProps = (dispatch) => ({
  removeItem: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)