const { expect } = require('chai');
const { find } = require('./find');

describe('find function', () => {
  it('should resolve todos', (done) => {
    find().then((todos) => {
      expect(todos).to.deep.equal([{id: 1, title: 'ABC', completed: true}])
      done();
    })
  });
  it('should resolve todos', async () => {
    const todos = await find();
    expect(todos).to.deep.equal([{id: 1, title: 'ABC', completed: true}])
  });
});
