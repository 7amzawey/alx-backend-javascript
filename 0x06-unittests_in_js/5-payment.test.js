const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let spy;
  this.beforeEach(function() {
    spy = sinon.spy(console, 'log')
  });
  this.afterEach(function() {
    spy.restore();
  });

  it('should call calculateNumber with SUM, 100, and 20 and return 120', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120'));
  });
  it('should call sendPaymentRequestToApi with 10, 10 and return 20', function () {  
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20'));
  });
});
