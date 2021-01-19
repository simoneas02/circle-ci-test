import { Router } from 'express';
import { ProductController } from '../product/productController';

const productRouter = Router();

productRouter.post('/', (request, response, next) => {
  try {
    const productController = ProductController().save(request.body);
    response.status(201).json(productController);
  } catch (exception) {
    console.log(`Error: ${exception}`);
    return next(exception);
  }
});

export default productRouter;
