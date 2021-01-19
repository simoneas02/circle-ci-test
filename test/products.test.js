import request from 'supertest';
import app from '../src/app';

describe('Products', () => {
  it('should add a new product.', async () => {
    const [product] = [
      {
        code: 10,
        description: 'Cremosinho doce de leite',
        buyPrice: 0.6,
        sellPrice: 1.0,
        tags: ['ice cream', 'candy'],
      },
    ];

    const response = await request(app).post('/products').send(product);

    expect(response.body).toMatchObject({
      ...product,
      lovers: 0,
    });
  });
});
