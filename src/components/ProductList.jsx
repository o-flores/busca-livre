import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';
import '../styles/products.css';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    if (products === 'none') return <p>Nenhum produto foi encontrado</p>;
    return (
      <div className="products-container">
        { products.map((product) => (
          <div className="product" key={ product.id }>
            <img src={ product.thumbnail } alt={ product.title } />
            <p className='title'>{ product.title }</p>
            <p className='price'>{`${ product.price } R$`}</p>
            <Link
              className='details'
              data-testid="product-detail-link"
              to={ {
                pathname: `/produto/${product.id}`,
                state: { product },
              } }
            >
              Saiba mais
            </Link>
            <AddToCart product={ product } testId="product-add-to-cart" />
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
