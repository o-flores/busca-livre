import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/addtocart.css';
import { connect } from 'react-redux';
import { addToCart } from '../actions/index';
import { saveProductsOnStorage } from '../services/localStorage';

class AddToCart extends Component {
  saveProduct = () => {
    const { product, add } = this.props;
    product.quantity = 1;
    add(product);
    saveProductsOnStorage(product);
  }

  render() {
    return (
      <div className='button-container'>
        <button
          type="button"
          id="button-add-to-cart"
          onClick={ this.saveProduct }
        >
          Adicione ao carrinho
        </button>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (product) => dispatch(addToCart(product)),
})

AddToCart.propTypes = {
  products: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(AddToCart);
