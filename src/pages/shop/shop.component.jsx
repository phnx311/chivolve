import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

import { collectionsSelector } from '../../redux/shop/shop.selector.js';
import { createStructuredSelector } from 'reselect';


const ShopPage = ({ collections }) => (

  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>

)

const mapStateToProps = createStructuredSelector({collections: collectionsSelector })


export default connect(mapStateToProps, null)(ShopPage);