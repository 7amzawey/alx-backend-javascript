const sinon = require('sinon')
const { expect } = require('chai')
const sendPayemntRequestToApi = require('./3-payment')
const Utils = require('./utils')

describe('sendPaymentRequestToApi', function() {
  it('both methods are the same', function () {
    const agentSendPaymet = sinon.spy(Utils, "calculateNumber");
    sendPayemntRequestToApi(20, 50);
    expect(agentSendPaymet.calledOnce.to.be.true);
    expect(agentSendPaymet.calledWith('SUM', 20, 50).to.be.true); 
  });
});
