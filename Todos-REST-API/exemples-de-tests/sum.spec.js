const { sum } = require("./sum");
const { assert, expect, should } = require('chai');

should();

describe('sum function', () => {
  it('should add positive numbers', () => {
    const result = sum(1, 2);
    assert.equal(result, 3);
    expect(result).to.equal(3);
    result.should.be.equal(3);
  });
});
