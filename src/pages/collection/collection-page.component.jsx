import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'

import {collectionSelector} from '../../redux/shop/shop.selector'

const CollectionPage = ( { collectionId, match, collections } ) => (
  <div className='collection-page'>
    {collections.map( ({id, ...otherProps}) => <CollectionItem key={id} {...otherProps}/>)}
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collections: collectionSelector(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps, null)(CollectionPage);