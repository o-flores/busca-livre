import React from 'react';
import '../styles/emptycart.css'

class EmptyCart extends React.Component {
  render() {
    return (
      <h2 className="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    );
  }
}

export default EmptyCart;
