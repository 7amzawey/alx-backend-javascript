const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const { server, app } = require('./api');

chai.use(chaiHttp);

describe('A test suite for the api.', function() {
  after(function(done) {
    server.close(done);
  });

  it('Returns Welcome to the payment system.', function(done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
