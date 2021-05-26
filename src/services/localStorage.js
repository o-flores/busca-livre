export function getProductsFromStorage() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  return products;
}

export function saveProductsOnStorage(newProduct) {
  const products = getProductsFromStorage();
  const newProducts = [...products, newProduct];
  localStorage.setItem('products', JSON.stringify(newProducts));
}

export function deleteItem(id) {
  const products = getProductsFromStorage();
  const newProducts = products.filter((product) => product.id !== id);
  localStorage.setItem('products', JSON.stringify(newProducts));
  return newProducts;
}
