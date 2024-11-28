const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call calculateNumber with SUM, 20, and 50', function () {
    const agentSendPayment = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(20, 50);

    expect(agentSendPayment.calledOnce).to.be.true;
    expect(agentSendPayment.calledWith('SUM', 20, 50)).to.be.true;

    agentSendPayment.restore();
  });
});
