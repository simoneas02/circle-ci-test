export const sell = (product, amount) => {
  product.stock -= 1;
  return product;
};
