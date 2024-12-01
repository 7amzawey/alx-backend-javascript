const { expect }= require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('return 4', function() {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('return 5', function() {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('return 4', function() {
    expect(calculateNumber('SUM', 1.2, 2.7)).to.equal(4)
  })
  it('return 3', function() {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });
  it('return 4', function() {
    expect(calculateNumber('SUBTRACT', 5.2, 1.3)).to.equal(4);
  });
  it('return 6', function() {
    expect(calculateNumber('SUBTRACT', 7.7, 2.3)).to.equal(6);
  });
  it('return 0.5', function() {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  it('return 5', function() {
    expect(calculateNumber('DIVIDE', 12.2, 3.2)).to.equal(4);
  });
  it('return Error', function() {
    expect(calculateNumber('DIVIDE', 1.2, 0.2)).to.equal('Error');
  });
  it('return Error', function() {
    expect(calculateNumber('DIVIDE', 1.5, 0.2)).to.equal('Error');
  });
});