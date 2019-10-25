import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: {imageUrl, name, id, quantity}}) => (
  <div className='cart-item'>
    <div className='cart-image' style={{backgroundImage: `url(${imageUrl})`}}></div>
    <div className='cart-item-info'>
      <div className='cart-item-name'>{name}</div>
      <div className='cart-item-count'>x {quantity}</div>
    </div>
  </div>
)

export default CartItem;