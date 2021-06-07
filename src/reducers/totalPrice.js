import { UPDATE_CART_PRICE } from '../actions';
const INITIAL_STATE = {
  totalPrice: 0,
};

const totalPriceReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case UPDATE_CART_PRICE:
        return {
          ...state,
          totalPrice: action.payload.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0),
        }
    default:
      return state;
  }
};

export default totalPriceReducer;
