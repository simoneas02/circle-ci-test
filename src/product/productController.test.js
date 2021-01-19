import { ProductController } from './productController';

describe('Product', () => {
  let products;

  beforeEach(() => {
    products = [
      {
        code: 10,
        description: 'Cremosinho doce de leite',
        buyPrice: 0.6,
        sellPrice: 1.0,
        tags: ['ice cream', 'candy'],
      },
      {
        code: 20,
        description: 'Cremosinho de moranguinho',
        buyPrice: 0.6,
        sellPrice: 1.0,
        tags: ['ice cream', 'candy'],
      },
    ];
  });

  describe('when save a new product', () => {
    it('should return an object containing the fields of the added product', () => {
      const [product] = products;

      const productResponse = ProductController().save(product);

      expect(productResponse).toMatchObject({
        code: 10,
        description: 'Cremosinho doce de leite',
        buyPrice: 0.6,
        sellPrice: 1.0,
        tags: ['ice cream', 'candy'],
      });
    });

    it('should add on product the lovers field equal zero if the product code not exist on database', () => {
      const [product] = products;

      const productResponse = ProductController().save(product);

      expect(productResponse).toMatchObject({
        code: 10,
        description: 'Cremosinho doce de leite',
        buyPrice: 0.6,
        sellPrice: 1.0,
        tags: ['ice cream', 'candy'],
        lovers: 0,
      });
    });

    it('should add on product the lovers field with the same lovers number from database if the product code has already existed on database', () => {
      const [_, product] = products;

      const productResponse = ProductController().save(product);

      expect(productResponse).toMatchObject({
        code: 20,
        description: 'Cremosinho de moranguinho',
        buyPrice: 0.6,
        sellPrice: 1.0,
        tags: ['ice cream', 'candy'],
        lovers: 5,
      });
    });
  });
});
