import React from 'react';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
import '../styles/cart.css'
import * as storageFunction from '../services/localStorage';
import { connect } from 'react-redux'

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage = () => {
    const products = storageFunction.getProductsFromStorage();
    this.setState({
      products,
    });
    this.sumPrices(products);
  }

  sumPrices = (products) => {
    const totalPrice = products.reduce((acc, cur) => acc + cur.price, 0);
    this.setState({ totalPrice });
  }

  handleOnChange = (id, totalPrice) => {
    const products = storageFunction.getProductsFromStorage();
    const productObject = products.find((product) => product.id === id);
    productObject.price = totalPrice;
    this.sumPrices(products);
  }

  deleteItem = (id) => {
    const products = storageFunction.deleteItem(id);
    this.setState({ products })
    this.sumPrices(products);
  }

  render() {
    const { totalPrice } = this.state;
    const { products } = this.props;
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

const mapStateToProps = ({ productsReducer: { products } }) => ({
  products,
});

export default connect(mapStateToProps)(Cart);
