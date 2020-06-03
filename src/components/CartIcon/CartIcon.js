import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../Redux/cart/cartActions';
import { selectCartItemsCount } from '../../Redux/cart/cart.selectors';
import './CartIcon.scss';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('Called');
  return {
    itemCount: selectCartItemsCount(state),
  };
};
const mapDispatchToProps = {
  toggleCartDropdown,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
