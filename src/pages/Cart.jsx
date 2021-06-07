import React from 'react';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
import '../styles/cart.css'
import * as storageFunction from '../services/localStorage';
import { connect } from 'react-redux';
import { renderCart } from '../actions'

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0,
    };
  }

  componentDidMount() {
    const { cartPrice, products } = this.props;
    cartPrice(products);
  }

  deleteItem = (id) => {
    const products = storageFunction.deleteItem(id);
    this.setState({ products })
    this.sumPrices(products);
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
          />
        )) }
        <div className='total-price-container'>
          {products.length > 0 && <b><p>{`Preço total: ${totalPrice} R$`}</p></b>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ productsReducer: { products }, totalPriceReducer: { totalPrice } }) => ({
  products,
  totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  cartPrice: (products) => dispatch(renderCart(products)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
