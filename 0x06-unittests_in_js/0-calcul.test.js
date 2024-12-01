const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe('calculateNumber', function() {
  it('return 4', function() {
      assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('return 5', function() {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('return 5', function() {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('return 6', function() {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('return 5', function() {
    assert.strictEqual(calculateNumber(1, 3.2), 4);
  })
});