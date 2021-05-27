import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/addtocart.css'

class AddToCart extends Component {
  render() {
    return (
      <div className='button-container'>
        <button
          type="button"
          id="button-add-to-cart"
          onClick={ this.handleLocalStorage }
        >
          Adicione ao carrinho
        </button>
      </div>

    );
  }
}

AddToCart.propTypes = {
  products: PropTypes.object,
}.isRequired;

export default AddToCart;
