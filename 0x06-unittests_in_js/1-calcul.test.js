const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('calculateNumber', function() {
  it('return 4', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('return 5', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('return 3', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  it('return 0.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });
  it('return Error', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0.2), 'Error')
  })
});