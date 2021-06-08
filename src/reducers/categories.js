import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR } from '../actions';

const INITIAL_STATE = {
  categories: [],
  error: null
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      }
      case GET_CATEGORIES_ERROR:
        return {
          ...state,
          error: action.payload
        }
    default:
      return state;
  }
};

export default categoriesReducer;