import request from 'supertest';
import app from '../app';

describe('Products', () => {
  describe('when adding a new product', () => {
    it('should response with 201 status code', async () => {
      await request(app)
        .post('/products')
        .send({
          code: 10,
          description: 'Cremosinho doce de leite',
          buyPrice: 0.6,
          sellPrice: 1.0,
          tags: ['ice cream', 'candy'],
        })
        .expect(201);
    });
  });
});
