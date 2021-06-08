import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR, SELECTED_CATEGORY } from '../actions';

const INITIAL_STATE = {
  categories: [],
  error: null,
  categoryId: '',
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
      case SELECTED_CATEGORY: 
        return {
          ...state,
          categoryId: action.payload,
        }
    default:
      return state;
  }
};

export default categoriesReducer;