import { combineReducers } from 'redux';
import cartReducer from './products';
import totalPriceReducer from './totalPrice';
import categoriesReducer from './categories';
import ProductsListReducer from './productsList';
import userReducer from './user';

const rootReducer = combineReducers({
  cartReducer,
  totalPriceReducer,
  categoriesReducer,
  ProductsListReducer,
  userReducer,
});

export default rootReducer;
