import { GET_PRODUCTS_LIST,GET_PRODUCTS_LIST_SUCCESS, GET_PRODUCTS_LIST_ERROR } from '../actions';

const INITIAL_STATE = {
  products: false,
  error: null,
  loading: false,
};

const productsListReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_PRODUCTS_LIST:
      return {
        ...state,
        loading: true,
      }
    case GET_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload.results,
        loading: false,
      }
      case GET_PRODUCTS_LIST_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        }
    default:
      return state;
  }
};

export default productsListReducer;