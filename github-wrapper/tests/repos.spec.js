import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
global.fetch = require('node-fetch');

import { getUserRepos } from '../src/repos';
import env from '../config/env';

describe('User repositories', () => {
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
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

      expect(stubedFetch).to.have.been.calledWith(`${env.GITHUB_URL}/users/davidalves1/repos`);
    });
    // Should call correct URL and returns JSON data
  });
});
