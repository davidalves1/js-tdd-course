import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import {
  getUser,
} from '../src/user';

describe('User', () => {
  // Garante que a lib tem os métodos que foram previstos
  describe('Smoke tests', () => {
    it('should exists the getUser method', () => {
      expect(getUser).to.exist;
    });
  });

  let stubeFetch;
  let promise;

  beforeEach(() => {
    stubeFetch = sinon.stub(global, 'fetch');
    // Simula a resposta da promise no then 'res.json()'
    promise = stubeFetch.resolves({ json: () => ({ name: 'David Alves' }) });
  });

  afterEach(() => {
    stubeFetch.restore();
  });

  describe('getUser', () => {

    it('should call fetch function', () => {
      const user = getUser();

      expect(stubeFetch).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      context('passing one type', () => {
        const david = getUser('davidalves1');

        expect(stubeFetch).to.have.been
          .calledWith('https://api.github.com/users/davidalves1');

        const willian = getUser('willianjusten');

        expect(stubeFetch).to.have.been
          .calledWith('https://api.github.com/users/willianjusten');
      });
    });


    it('should return the JSON data from the promise', () => {
      const user = getUser('davidalves1');

      user.then(data => {
        // eql = deep equal
        expect(data).to.be.eql({name: 'David Alves'});
      })
    });
  });

});
