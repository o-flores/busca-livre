import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import '../styles/cartbutton.css';

class CartButton extends React.Component {
  render() {
    return (
      <Link to="/cart">
        <FiShoppingCart id='cart'/>
      </Link>
    );
  }
}

export default CartButton;
