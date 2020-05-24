import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    return (
      <div className='shop-page'>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default Shop;
