import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cartItem.css'
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    const { product: { price } } = this.props;
    this.state = {
      quantity: 1,
      totalPrice: price,
    };
  }

  handleOnclick = (operation, id) => {
    const { quantity } = this.state;
    if (operation === 'add') {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }), () => this.updateTotalPrice(id));
    } else if (quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }), () => this.updateTotalPrice(id));
    }
  }

  updateTotalPrice = (id) => {
    const { onChange } = this.props;
    const { product: { price } } = this.props;
    const { quantity } = this.state;
    this.setState({
      totalPrice: price * quantity,
    }, () => {
      const { totalPrice } = this.state;
      onChange(id, totalPrice);
    });
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
              onClick={() => this.handleOnclick('sub', id)}
              type="button"
            >
            </FaMinus>
            <p>{quantity}</p>
            <FaPlus
              className='button-quantity'
              onClick={() => this.handleOnclick('add', id)}
              type="button"
            >
            </FaPlus>
          </div>
          <FaTrash
          onClick={ () => deleteItem(id) }
          />
        </div>
      </div>

    );
  }
}

CartItem.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default CartItem;
