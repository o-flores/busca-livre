import React from 'react';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
import '../styles/cart.css'
import { connect } from 'react-redux';
import { updateCartPrice, addToCart } from '../actions';
import { getProductsFromStorage } from '../services/localStorage';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0,
    };
  }

  componentDidMount() {
    const { cartPrice, add } = this.props;
    let { products } = this.props;
    if(products.length === 0) {
      products = getProductsFromStorage();
      products.forEach((item) => add(item))
    }
    cartPrice(products);
  }

  componentDidUpdate() {
    const { cartPrice, products } = this.props;
    cartPrice(products);
  }

  render() {
    const { products, totalPrice } = this.props;
    return (
      <div>
        {products.length === 0 && <EmptyCart />}
        { products.length > 0 && products.map((product) => (
          <CartItem
            deleteItem={ this.deleteItem }
            key={ product.id }
            product={ product }
            onChange={ this.handleOnChange }
            itemQuantity={ product.quantity }
          />
        )) }
        <div className='total-price-container'>
          {products.length > 0 && <b><p>{`Preço total: ${totalPrice} R$`}</p></b>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cartReducer: { products }, totalPriceReducer: { totalPrice } }) => ({
  products,
  totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  cartPrice: (products) => dispatch(updateCartPrice(products)),
  add: (product) => dispatch(addToCart(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
