import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection-page.component'

const ShopPage = ( {match} ) => (

  <div className='shop-page'>
    <Route exact path={`${match.url}`} component={CollectionsOverview} />
    <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
  </div>

)

export default ShopPage;