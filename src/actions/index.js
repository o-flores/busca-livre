export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const addToCart = (payload) => ({
  type: ADD_PRODUCT_TO_CART,
  payload,
});