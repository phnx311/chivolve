import React from 'react';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ( {id, name, price, imageUrl} ) => (
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
      <CustomButton inverted>Add To Cart</CustomButton>
    </div>
  </div>
)

export default CollectionItem;