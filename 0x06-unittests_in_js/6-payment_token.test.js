const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token')
describe('getPaymentTokenFromAPI', function() {
  it('returns a resolved promise', function(done) {
    getPaymentTokenFromAPI(true).then((data) => {
        expect(data).to.deep.equal({data: 'Successful response from the API'});
        done();
    }).catch(done);
  });
});