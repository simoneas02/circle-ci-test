import { uuid } from 'uuidv4';
import { Router } from 'express';

const productsRouter = Router();

let products = [];

productsRouter.post('/', (request, response) => {
  const { code, description, buyPrice, sellPrice, tags } = request.body;

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

  response.json(product);
});

export default productsRouter;
