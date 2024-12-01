const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
    const API_URL = 'http://localhost:7865';

    it('GET / returns Welcome to the payment system', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /cart/:id returns Payment methods for cart :id', function(done) {
        const id = 99;
        request.get(`${API_URL}/cart/${id}`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 99');
            done();
        });
    });

    it('GET /cart/emad returns 404', function(done) {
        request.get(`${API_URL}/cart/emad`, (_err, res, _body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('GET /login/:username returns Welcome username', function(done) {
        request.post(`${API_URL}/login/Mo`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome Mo');
            done();
        });
    });

    it('GET /available_payments returns payment methods', function(done) {
        request.get(`${API_URL}/available_payments`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(JSON.parse(body)).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            });
            done();
        });
    });
});
