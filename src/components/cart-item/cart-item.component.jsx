import React from 'react';
import {connect} from 'react-redux';

import './cart-item.styles.scss';

import { removeItemFromCart } from '../../redux/cart/cart.action'

const CartItem = ({ item, removeItem}) => (
  <div className='cart-item'>
    <div className='cart-image-container'>
      <img src={item.imageUrl} alt="itemimage"/>
    </div>
    <div className='cart-item-info'>
      <div className='cart-item-name'>{item.name}</div>
      <div className='cart-item-count' >x {item.quantity}</div>
    </div>
    <div className='cart-item-remove' onClick={() => {removeItem(item)}}>
      <div>
        <small>remove</small>
      </div>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);