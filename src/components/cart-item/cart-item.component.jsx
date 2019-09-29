import React from 'react';

import './cart-item/cart-item.styles.scss';
import { url } from 'inspector';

const CartItem = ({imageUrl}) => (
  <div className='cart-item'>
    <div className='cart-image' style={{backgroundImage: `url(${imageUrl})`}}></div>
    <div className='cart-item-info'>
      <div className='cart-item-name'></div>
      <div className='cart-item-count'></div>
    </div>
  </div>
)

export default CartItem;