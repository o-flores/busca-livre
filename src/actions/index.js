import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const addToCart = (payload) => ({
  type: ADD_PRODUCT_TO_CART,
  payload,
});

export const REFRESH_CART =  'REFRESH_CART';
export const refreshCart = (payload) => ({
  type: REFRESH_CART,
  payload,
});

export const ADD_QUANTITY_CART_ITEM = 'ADD_QUANTITY_CART_ITEM';
export const addQuantity = (payload) => ({
  type: ADD_QUANTITY_CART_ITEM,
  payload,
});


export const DECREASE_QUANTITY_CART_ITEM = 'DECREASE_QUANTITY_CART_ITEM';
export const decreaseQuantity = (payload) => ({
  type: DECREASE_QUANTITY_CART_ITEM,
  payload,
});


export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
export const deleteCartItem = (payload) => ({
  type: DELETE_CART_ITEM,
  payload,
})


export const UPDATE_CART_PRICE = 'UPDATE_CART_PRICE';
export const updateCartPrice = (payload) => ({
  type: UPDATE_CART_PRICE,
  payload,
})

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY';

export const getCategoriesListsSuccess = (payload) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload,
});

export const getCategoriesListError = (payload) => ({
  type: GET_CATEGORIES_ERROR,
  payload,
});

export const getCategoriesListThunk = () => async (dispatch) => {
  try {
    const data = await getCategories();
    dispatch(getCategoriesListsSuccess(data));
  }
  catch (error) {
    dispatch(getCategoriesListError(error));
  }
};

export const getSelectedCategory = (payload) => ({
  type: SELECTED_CATEGORY,
  payload,
});

export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';
export const GET_PRODUCTS_LIST_SUCCESS = 'GET_PRODUCTS_LIST_SUCCESS';
export const GET_PRODUCTS_LIST_ERROR = 'GET_PRODUCTS_LIST_ERROR';

export const getProductsList = () => ({
  type: GET_PRODUCTS_LIST,
});

export const getProductsListSuccess = (payload) => {
  if(payload.results.length === 0) {
    payload.results = null;
  }
  return {
    type: GET_PRODUCTS_LIST_SUCCESS,
    payload,  
  }
  
};
export const getProductsListError = (payload) => ({
  type: GET_PRODUCTS_LIST_ERROR,
  payload,
});

export const getProductsListThunk = ({categoryId, query}) => async (dispatch) => {
  dispatch(getProductsList());
  try {
    const data = await getProductsFromCategoryAndQuery(categoryId, query);
    dispatch(getProductsListSuccess(data));
  }
  catch (error) {
    dispatch(getProductsListError(error));
  }
};

export const LOGIN = 'LOGIN';
export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
})
