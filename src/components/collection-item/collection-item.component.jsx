import React from 'react';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.action';

const CollectionItem = ( {id, name, price, imageUrl, addToCart} ) => (
  <div className='collection-item'>
    <div className='image' style={{
      backgroundImage: `url(${imageUrl})`
    }}>
    </div>
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <div className='collection-item-button'>
      <CustomButton inverted onClick={() => { addToCart({id, name, price, imageUrl})}}>Add To Cart</CustomButton>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);