import React from 'react';
import { connect } from 'react-redux';
import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../Redux/actions/cartActions';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
