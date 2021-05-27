import React from 'react';
import '../styles/header.css'
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton'
import { MdPersonOutline } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='left-container'>
          <div className='logo'>
            <a href='/'><b><span>Busca Livre</span></b></a>
          </div>
        </div>
        <nav className='right-container'>
          <span>Sobre nós</span>
          <IoIosArrowDown/>
          <Link to='/signup'><MdPersonOutline className='sign-in' /></Link>
          <CartButton />
        </nav>
        
        
      </header>
    );
  }
}

export default Header;
