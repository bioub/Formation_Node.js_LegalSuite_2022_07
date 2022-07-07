const { expect, use } = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { show } = require('./todo');
const Todo = require('../models/todo');

use(sinonChai);

describe('show controller function', () => {

  it('should call res.json with todos', async () => {
    const req = {
      params: {
        id: '1234abcd'
      }
    };
    const res = {
      json: sinon.spy(),
    };
    const next = sinon.spy();

    const mock = sinon.mock(Todo);
    mock.expects("findById").once().resolves({_id: '1234abcd', title: 'XYZ', completed: false});

    await show(req, res, next);

    expect(res.json).to.have.been.calledOnceWith({_id: '1234abcd', title: 'XYZ', completed: false})

    mock.verify();
  });


});
