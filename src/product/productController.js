import { uuid } from 'uuidv4';

export const ProductController = () => {
  let products = [
    {
      code: 20,
      description: 'Cremosinho morango',
      buyPrice: 0.6,
      sellPrice: 1.0,
      tags: ['ice cream', 'candy'],
      lovers: 5,
    },
  ];

  return {
    save({ code, description, buyPrice, sellPrice, tags }) {
      const isAlreadyExistProducts = products.find(
        product => product.code === code
      );

      const lovers = isAlreadyExistProducts ? isAlreadyExistProducts.lovers : 0;

      const product = {
        id: uuid(),
        code,
        description,
        buyPrice,
        sellPrice,
        tags,
        lovers,
      };

      products = [...products, product];

      return product;
    },
  };
};
