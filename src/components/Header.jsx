import React from 'react';
import '../styles/header.css'
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';
import { MdPersonOutline } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <header>
        <div className='left-container'>
          <div className='logo'>
            <a href='/busca-livre'><b><span>Busca Livre</span></b></a>
          </div>
        </div>
        <nav className='right-container'>
          <span>Sobre nós</span>
          <IoIosArrowDown/>
          <Link to='/signup'><MdPersonOutline className='sign-in' /></Link>
          <CartButton />
          <span className='products-counter-container'>{products.length > 0 && <span className='products-counter'>{products.length}</span>}</span>
        </nav>    
      </header>
    );
  }
}

const mapStateToProps = ({ productsReducer: { products } }) => ({
  products,
})

export default connect(mapStateToProps)(Header);
