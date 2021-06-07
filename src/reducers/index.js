import { combineReducers } from 'redux';
import productsReducer from './products';
import totalPriceReducer from './totalPrice'

const rootReducer = combineReducers({
  productsReducer,
  totalPriceReducer,
});

export default rootReducer;
