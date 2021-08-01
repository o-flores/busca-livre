import React from 'react';
import '../styles/header.css'
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';
import { MdPersonOutline } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { connect } from 'react-redux';
import { getProductsFromStorage, getUserFromLocalStorage } from '../services/localStorage';
import { refreshCart, loginAction } from '../actions';

class Header extends React.Component {

  componentDidMount() {
    const { refreshCart, login } = this.props;
    const newProducts = getProductsFromStorage();
    refreshCart(newProducts);

    const user = getUserFromLocalStorage();
    if (!user) return;
    if (user) login(user);
  }

  render() {
    const { products, user } = this.props;
    return (
      <header>
        <div className='left-container'>
          <div className='logo'>
            <a href='/busca-livre'><b><span>Busca Livre</span></b></a>
          </div>
        </div>
        <div>
          {user.name ? `Seja bem-vindo, ${user.name}` : 'Faça Login para aproveitar as promoções'}
        </div>
        <nav className='right-container'>
          <span>Sobre nós</span>
          <IoIosArrowDown />
          <Link to='/signup'><MdPersonOutline className='sign-in' /></Link>
          <CartButton />
          <span className='products-counter-container'>{products.length > 0 && <span className='products-counter'>{products.length}</span>}</span>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = ({ cartReducer: { products }, userReducer: { user } }) => ({
  products,
  user,
})

const mapDispatchToProps = (dispatch) => ({
  refreshCart: (products) => dispatch(refreshCart(products)),
  login: (state) => dispatch(loginAction(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
