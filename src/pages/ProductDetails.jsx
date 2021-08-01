import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

class ProductDetails extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ProductCard props={ this.props } />
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default ProductDetails;
