import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/products.css';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    if (products === 'none') return <p>Nenhum produto foi encontrado</p>;
    return (
      <div className="products-container">
        { products.map((product) => (
          <div className="product" key={product.id}>
            <Link
              className='details'
              to={{
                pathname: `/produto/${product.id}`,
                state: { product },
              }}>
              <img src={product.thumbnail} alt={product.title} />
            </Link>
            <Link
              className='details'
              to={{
                pathname: `/produto/${product.id}`,
                state: { product },
              }}>
              <p className='title'>{product.title}</p>
            </Link>
            <p className='price'>{`${product.price} R$`}</p>
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  isClicked: PropTypes.bool,
}.isRequired;

export default ProductList;
