const { expect, use } = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { tokens } = require('../models/user');
const authenticate = require('./authenticate');

use(sinonChai);

describe('authenticate function', () => {
  beforeEach(() => {
    tokens.push('1234abcd');
  });

  afterEach(() => {
    tokens.pop();
  })

  it('should call next if token exist', () => {
    const req = {
      headers: {
        authorization: '1234abcd'
      }
    }
    const res = {};
    let hasBeenCalled = false;
    const next = () => {
      hasBeenCalled = true;
    };
    authenticate(req, res, next);
    expect(hasBeenCalled).to.be.true;
  });

  it('should call next if token exist with sinon', () => {
    const req = {
      headers: {
        authorization: '1234abcd'
      }
    }
    const res = {};
    const next = sinon.spy();
    authenticate(req, res, next);
    expect(next).to.have.been.called;
  });

  // Exercice 2
  // Tester que si le token n'est pas dans le tableau
  // la réponse soit bien status 401
  // et res.json soit bien appelé avec un objet {msg: 'Unauthorized'}
  it('should call res.json if token is not valid', () => {
    const req = {
      headers: {
        authorization: 'invalid-token'
      },
    };
    const res = {
      json: sinon.spy(),
    };
    const next = sinon.spy();

    authenticate(req, res, next);
    expect(res.statusCode).to.equal(401);
    expect(res.json).to.have.been.calledOnceWith({
      msg: 'Unauthorized',
    });
  });

});
