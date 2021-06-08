import { combineReducers } from 'redux';
import cartReducer from './products';
import totalPriceReducer from './totalPrice';
import categoriesReducer from './categories';
import ProductsListReducer from './productsList';

const rootReducer = combineReducers({
  cartReducer,
  totalPriceReducer,
  categoriesReducer,
  ProductsListReducer,
});

export default rootReducer;
