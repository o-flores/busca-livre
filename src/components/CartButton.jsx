import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import '../styles/cartbutton.css'

class CartButton extends React.Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <span id='cart'><FaShoppingCart /></span>
      </Link>
    );
  }
}

export default CartButton;
