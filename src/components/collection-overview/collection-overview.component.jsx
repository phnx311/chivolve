import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import { collectionsSelector } from '../../redux/shop/shop.selector';

const CollectionOverview = ( {collections} ) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({collections: collectionsSelector})

export default connect(mapStateToProps, null)(CollectionOverview);