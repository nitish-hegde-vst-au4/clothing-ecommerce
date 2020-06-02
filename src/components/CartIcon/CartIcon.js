import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../Redux/actions/cartActions';
import './CartIcon.scss';

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = {
  toggleCartDropdown,
};

export default connect(null, mapDispatchToProps)(CartIcon);
