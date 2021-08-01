import React from 'react';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
import '../styles/cart.css'
import { connect } from 'react-redux';
import { updateCartPrice } from '../actions';
import { getProductsFromStorage } from '../services/localStorage';
import Header from '../components/Header';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0,
    };
  }

  componentDidMount() {
    const { cartPrice } = this.props;
    const newProducts = getProductsFromStorage();
    cartPrice(newProducts);
  }

  componentDidUpdate() {
    const { cartPrice, products } = this.props;
    cartPrice(products);
  }

  render() {
    const { products, totalPrice } = this.props;
    return (
      <>
        <Header />
        <div>
          {products.length === 0 && <EmptyCart />}
          {products.length > 0 && products.map((product) => (
            <CartItem
              deleteItem={this.deleteItem}
              key={product.id}
              product={product}
              onChange={this.handleOnChange}
              itemQuantity={product.quantity}
            />
          ))}
          <div className='total-price-container'>
            {products.length > 0 && <b><p>{`Preço total: ${parseFloat(totalPrice).toFixed(2)} R$`}</p></b>}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ cartReducer: { products }, totalPriceReducer: { totalPrice } }) => ({
  products,
  totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  cartPrice: (products) => dispatch(updateCartPrice(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
