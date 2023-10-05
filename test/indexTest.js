// indexTest.js

const assert = require('assert');
const indexFunctions = require('../index');

describe('index.js', () => {
  it('multiply is an equation whose multiplied results will equal 62', () => {
    const result = indexFunctions.multiply(31, 2);
    assert.strictEqual(result, 62);
  });

  it('random generates a random integer greater than 0', () => {
    const result = indexFunctions.random();
    assert.ok(result > 0, `Expected ${result} to be greater than 0`);
  });

  it('mod is an equation that calculates a remainder that is equal to 4', () => {
    const result = indexFunctions.mod(14, 5);
    assert.strictEqual(result, 4);
  });

  it('max will return 20 as the highest number in the set', () => {
    const result = indexFunctions.max([10, 5, 20, 15]);
    assert.strictEqual(result, 20);
  });
});
