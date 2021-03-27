import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '..';


chai.use(chaiHttp);

describe('Root route', () => {
  describe('SUCCESS', () => {
    it('should make a successful request to root v1 URL', async () => {
      const res = await chai.request(app)
        .get('/api/v1')
        .send();

      console.log({res});
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('message');
    });
  });

  describe('FAILURE', () => {});
});