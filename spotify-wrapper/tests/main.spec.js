import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/app';

describe('Spotify Wrapper', () => {
  // Garante que a lib tem os métodos que foram previstos
  describe('Smoke tests', () => {
    it('should exists the seach method', () => {
      expect(search).to.exist;
    });

    it('should exists the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exists the seachArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exists the seachTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exists the seachPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;

      fetchedStub.restore();
    });

    it('should receive the correct url to fetch', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search('Los Hermanos', 'artist');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Los Hermanos&type=artist');

      const albums = search('Los Hermanos', 'album');
      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Los Hermanos&type=album');

      fetchedStub.restore();
    });
  });
});
