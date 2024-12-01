const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const app = require('./api');

chai.use(chaiHttp);

describe('A test suite for the api.', function() {
  it('Returns Welcome to the payment system.', function(done) {
    chai.request(app).get('/').end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.text).to.equal('Welcome to the payment system');
      done();
    });
  });
});
