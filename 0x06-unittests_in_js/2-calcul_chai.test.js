const chai = require('chai')
const expect = chai.expect
const calculateNumber = require('./1-calcul')

describe('calculateNumber', function() {
  it('return 4', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('return 5', function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('return 3', function() {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });
  it('return 0.5', function() {
      chai.expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  it('return Error', function() {
    chai.expect(calculateNumber('DIVIDE', 1.5, 0.2)).to.equal('Error');
  })
});