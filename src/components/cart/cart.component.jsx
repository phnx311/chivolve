import React from 'react';

import { connect } from 'react-redux';

import './cart.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const Cart = () => (
  <div className='cart'>
    <div className='cart-items'></div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
)

export default connect()(Cart);