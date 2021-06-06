import { ADD_PRODUCT_TO_CART } from '../actions';
const INITIAL_STATE = {
  products: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    default:
      return state;
  }
};

export default productsReducer;
