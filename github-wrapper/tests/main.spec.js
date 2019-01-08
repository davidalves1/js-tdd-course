import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

import {
  searchUser,
  searchUserRepos,
} from '../src/app';

describe('Github Wrapper', () => {
  // Garante que a lib tem os métodos que foram previstos
  describe('Smoke tests', () => {
    it('should exists the searchUser method', () => {
      expect(searchUser).to.exist;
    });

    it('should exists the searchUserRepos method', () => {
      expect(searchUserRepos).to.exist;
    });
  });

  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    // Simula a resposta da promise no then 'res.json()'
    promise = fetchedStub.resolves({ json: () => ({ name: 'David Alves' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('User search', () => {

    it('should call fetch function', () => {
      const user = searchUser();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      context('passing one type', () => {
        const david = searchUser('davidalves1');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.github.com/users/davidalves1');

        const willian = searchUser('willianjusten');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.github.com/users/willianjusten');
      });
    });


    it('should return the JSON data from the promise', () => {
      const user = searchUser('davidalves1');

      user.then(data => {
        // eql = deep equal
        expect(data).to.be.eql({name: 'David Alves'});
      })
    });
  });

});
