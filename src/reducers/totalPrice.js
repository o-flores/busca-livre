import { ADD_QUANTITY_CART_ITEM, DECREASE_QUANTITY_CART_ITEM, RENDER_CART } from '../actions';
const INITIAL_STATE = {
  totalPrice: 0,
};

const totalPriceReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_QUANTITY_CART_ITEM:
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.price,
      }
      case DECREASE_QUANTITY_CART_ITEM:
        return {
          ...state,
          totalPrice: state.totalPrice - action.payload.price,
        }
      case RENDER_CART:
        return {
          ...state,
          totalPrice: action.payload.reduce((acc, cur) => acc + cur.price, 0),
        }
    default:
      return state;
  }
};

export default totalPriceReducer;
