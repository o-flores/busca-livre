import React from 'react';
import '../styles/header.css'
import CartButton from '../components/CartButton'

class Header extends React.Component {
  render() {
    return (
      <header>
        HEADER
        <CartButton />
      </header>
    );
  }
}

export default Header;
