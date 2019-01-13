import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
global.fetch = require('node-fetch');

import { getUserRepos } from '../src/repos';
import config from '../config';

describe('User repositories', () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: () => ({ name: 'Hello-World' }) })
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should exists getUserRepos method', () => {
      expect(getUserRepos).to.exist;
    });
  });

  describe('getUserRepos', () => {
    it('Should call fetch method', () => {
      const repos = getUserRepos();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('Should call correct URL', () => {
      const repos = getUserRepos('davidalves1');

      expect(stubedFetch).to.have.been.calledWith(`${config.GITHUB_URL}/users/davidalves1/repos`);
    });

    it('Should call correct URL and returns JSON data', () => {
      const repos = getUserRepos('davidalves1');

      repos.then(data => {
        // eql = deep equal
        expect(data).to.be.eql({ name: 'Hello-World' });
      })
    });
  });
});
