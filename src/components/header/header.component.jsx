import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils.js';

import { connect } from 'react-redux';

import { ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
      }
      < CartIcon />
    </div>
    <Cart />
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header);