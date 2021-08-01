export function getProductsFromStorage() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  return products;
}

export function saveProductsOnStorage(newProduct) {
  const products = getProductsFromStorage();
  const newProducts = [...products, newProduct];
  localStorage.setItem('products', JSON.stringify(newProducts));
}

export function deleteCartItemFromLocalStorage(id) {
  const products = getProductsFromStorage();
  const newProducts = products.filter((product) => product.id !== id);
  localStorage.setItem('products', JSON.stringify(newProducts));
  return newProducts;
}

export function saveUserToLocalStorage(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUserFromLocalStorage() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
}

export function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('products');

}