import Product from '../src/model/product';
import { sell } from '../src/service/sellProduct';

describe('Product', () => {
  it('should validate write-off of the sale of a unit.', () => {
    const product = new Product('cell phone', 500.0, 900.0, 10);

    sell(product, 1);

    expect(product.stock).toBe(9);
  });

  it('should accept the sale of more than one unit.', () => {
    const product = new Product('cell phone', 500.0, 900.0, 10);

    sell(product, 3);

    expect(product.stock).toBe(7);
  });
});
