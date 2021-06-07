import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cartItem.css'
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { connect } from 'react-redux';
import { addQuantity, decreaseQuantity } from '../actions'

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  handleOnclick = (operation, product) => {
    const { quantity } = this.state;
    const { add, decrease } = this.props;
    if (operation === 'add') {
      if (this.checkQuantity()) {
        this.setState((prevState) => ({
          quantity: prevState.quantity + 1,
        }), () => add(product));
      }
    } else if (quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }), () => decrease(product));
    }
  }

  checkQuantity = () => {
    const { quantity } = this.state;
    const { product: { available_quantity } } = this.props;
    if (quantity + 1 <= available_quantity) return true;
  }

  render() {
    const { product, deleteItem } = this.props;
    const { title, price, thumbnail, id } = product;
    const { quantity } = this.state;
    return (
      <div className='cart-item-container'>
        <img src={thumbnail} alt={title} />
        <div className='cart-item-info'>
          <p>{title}</p>
          <p>{`${price} R$`}</p>
          <div className='cart-item-quantity'>
            <FaMinus
              className='button-quantity'
              onClick={() => this.handleOnclick('sub', product)}
              type="button"
            >
            </FaMinus>
            <p>{quantity}</p>
            <FaPlus
              className='button-quantity'
              onClick={() => this.handleOnclick('add', product)}
              type="button"
            >
            </FaPlus>
          </div>
          <FaTrash
            onClick={() => deleteItem(id)}
          />
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (product) => dispatch(addQuantity(product)),
  decrease: (product) => dispatch(decreaseQuantity(product)),
});

CartItem.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(CartItem);
