import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as storage from '../services/localStorage';
import '../styles/addtocart.css'

class AddToCart extends Component {
  handleLocalStorage = () => {
    const { product } = this.props;
    storage.saveProductsOnStorage(product);
  }

  render() {
    const { testId } = this.props;
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
