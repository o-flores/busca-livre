import React from 'react';
import { string } from 'prop-types';
import AddToCart from './AddToCart';
import '../styles/productCard.css'

class ProductCard extends React.Component {
  render() {
    const {
      props: { location: { state: { product: {
        thumbnail,
        title,
        price,
        attributes,
      } } } } } = this.props;
    const { props: { location: { state: { product } } } } = this.props;
    return (
      <div className='product-card'>
        <div className='photo-container'>
          <img src={thumbnail} alt={title} />
        </div>
        <div className='product-info-container'>
          <h1>{title}</h1>
          <h2>{` R$: ${price} `}</h2>
          <ul>
            {attributes.map((attribute) => (
              <li key={attribute.id}>
                { `${attribute.name}: ${attribute.value_name}`}
              </li>
            ))}
          </ul>
          <br />
          <AddToCart product={product} />
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  thumbnail: string,
}.isRequired;

export default ProductCard;
