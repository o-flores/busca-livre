import { combineReducers } from 'redux';
import productsReducer from './products';
import totalPriceReducer from './totalPrice';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  productsReducer,
  totalPriceReducer,
  categoriesReducer,
});

export default rootReducer;
