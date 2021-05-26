import React from 'react';
import '../styles/header.css'
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton'

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link to='/'><b><span>Busca Livre</span></b></Link>
        </nav>
        <CartButton />
      </header>
    );
  }
}

export default Header;
