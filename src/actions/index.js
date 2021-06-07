export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const addToCart = (payload) => ({
  type: ADD_PRODUCT_TO_CART,
  payload,
});


export const ADD_QUANTITY_CART_ITEM = 'ADD_QUANTITY_CART_ITEM';
export const DECREASE_QUANTITY_CART_ITEM = 'DECREASE_QUANTITY_CART_ITEM';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
export const addQuantity = (payload) => ({
  type: ADD_QUANTITY_CART_ITEM,
  payload,
});

export const decreaseQuantity = (payload) => ({
  type: DECREASE_QUANTITY_CART_ITEM,
  payload,
});

export const deleteCartItem = (payload) => ({
  type: DELETE_CART_ITEM,
  payload,
})


export const UPDATE_CART_PRICE = 'UPDATE_CART_PRICE';
export const updateCartPrice = (payload) => ({
  type: UPDATE_CART_PRICE,
  payload,
})