export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';



export const addToCart = (payload) => ({
  type: ADD_PRODUCT_TO_CART,
  payload,
});

export const ADD_QUANTITY_CART_ITEM = 'ADD_QUANTITY_CART_ITEM';
export const DECREASE_QUANTITY_CART_ITEM = 'DECREASE_QUANTITY_CART_ITEM';
export const RENDER_CART = 'RENDER_CART';

export const addQuantity = (payload) => ({
  type: ADD_QUANTITY_CART_ITEM,
  payload,
});

export const decreaseQuantity = (payload) => ({
  type: DECREASE_QUANTITY_CART_ITEM,
  payload,
});

export const renderCart = (payload) => ({
  type: RENDER_CART,
  payload,
})