const { expect } = require('chai');
const { throwError } = require('./throw-error');

describe('throwError function', () => {
  it('should not throw error', () => {
    throwError();
  });
  it('should not throw error alt', () => {
    expect(() => throwError()).not.to.throw();
  });
  it('should throw error', () => {
    expect(() => throwError(true)).to.throw('Example Error');
  });
});
