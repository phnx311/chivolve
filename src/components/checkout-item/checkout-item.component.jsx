import React from 'react';

import { connect } from 'react-redux';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  console.log(cartItem)
  return(

  <div className="checkout-item">
    <div className='checkout-block'>
      <div className ='image-container'>
        <img src={cartItem.imageUrl} alt="item"/>
      </div>
    </div>
      <div className='checkout-block'>{cartItem.name}</div>
    <div className='checkout-block'>{cartItem.quantity}</div>
    <div className='checkout-block'>${cartItem.price}</div>
    <div className='checkout-block'>X</div>
  </div>

)}


export default CheckoutItem