const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
    const API_URL = 'http://localhost:7865';

    it('GET / returns Welcome to payment method', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /cart/:id returns Payment methods for cart :id', function(done) {
        id = 99;
        request.get(`${API_URL}/cart/${id}`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 99');
            done();
        });
    });
});
