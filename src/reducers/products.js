import { ADD_PRODUCT_TO_CART, DELETE_CART_ITEM, ADD_QUANTITY_CART_ITEM, DECREASE_QUANTITY_CART_ITEM, } from '../actions';
const INITIAL_STATE = {
  products: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    case DELETE_CART_ITEM:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.id),
      }
      case ADD_QUANTITY_CART_ITEM:
        const product = state.products.find((product) => product.id === action.payload.id);
        const indexOf = state.products.indexOf(product);
        product.quantity += 1;
        const newProduct = product;
        const newProducts = state.products.map((item,index) => {
          if(index === indexOf) {
            return newProduct;
          }
          return item;
        })
        return {
          ...state,
          products: newProducts,
        }
      case DECREASE_QUANTITY_CART_ITEM:
        const product_2 = state.products.find((product) => product.id === action.payload.id);
        const indexOf_2 = state.products.indexOf(product_2);
        product_2.quantity -= 1;
        const newProduct_2 = product_2;
        const newProducts_2 = state.products.map((item,index) => {
          if(index === indexOf_2) {
            return newProduct_2;
          }
          return item;
        })
        return {
          ...state,
          products: newProducts_2,
        }
    default:
      return state;
  }
};

export default cartReducer;
