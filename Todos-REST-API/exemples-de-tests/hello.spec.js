const { expect } = require('chai');
const { hello } = require('./hello');

describe('hello function', () => {
  it('should return Hello Romain', () => {
    expect(hello('Romain')).to.be.equal('Hello Romain');
  });
});
