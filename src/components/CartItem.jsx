import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cartItem.css'
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { connect } from 'react-redux';
import { addQuantity, decreaseQuantity, deleteCartItem } from '../actions'
import { deleteCartItemFromLocalStorage } from '../services/localStorage';

class CartItem extends React.Component {

  handleOnclick = (operation, product) => {
    const { add, decrease, itemQuantity } = this.props;
    if (operation === 'add') {
      if (this.checkQuantity()) {
        add(product);
      }
    } else if (itemQuantity > 1) {
        decrease(product);
    }
  }

  checkQuantity = () => {
    const { product: { available_quantity }, itemQuantity } = this.props;
    if (itemQuantity + 1 <= available_quantity) return true;
  }

  handleDeleteCartItem = (product) => {
    const { deleteItem } = this.props;
    deleteItem(product);
    deleteCartItemFromLocalStorage(product.id);
  }

  render() {
    const { product, itemQuantity} = this.props;
    const { title, price, thumbnail } = product;
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
            <p>{itemQuantity}</p>
            <FaPlus
              className='button-quantity'
              onClick={() => this.handleOnclick('add', product)}
              type="button"
            >
            </FaPlus>
          </div>
          <FaTrash
            onClick={() => this.handleDeleteCartItem(product)}
          />
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (product) => dispatch(addQuantity(product)),
  decrease: (product) => dispatch(decreaseQuantity(product)),
  deleteItem: (product) => dispatch(deleteCartItem(product)),
});

CartItem.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(CartItem);
