import { combineReducers } from 'redux';
import cartReducer from './products';
import totalPriceReducer from './totalPrice';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  cartReducer,
  totalPriceReducer,
  categoriesReducer,
});

export default rootReducer;
