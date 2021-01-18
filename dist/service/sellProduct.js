"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const sell = (product, amount) => {
  product.stock -= 1;
  return product;
}; exports.sell = sell;
