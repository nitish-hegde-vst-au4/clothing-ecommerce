import React from 'react';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropDown';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './Header.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
