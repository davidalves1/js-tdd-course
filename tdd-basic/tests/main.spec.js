import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/calc';

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exist the method "sum" in the calc', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method "sub" in the calc', () => {
      expect(sub).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method "mult" in the calc', () => {
      expect(mult).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method "div" in the calc', () => {
      expect(div).to.exist;
      expect(sum).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(sum(2,2)).to.be.equal(4);
    });

    it('should return 42 when sum(13, 29)', () => {
      expect(sum(13,29)).to.be.equal(42);
    });
  });

  describe('Sub', () => {
    it('should return 4 when sub(6,2)', () => {
      expect(sub(6,2)).to.be.equal(4);
    });

    it('should return 42 when sub(53, 11)', () => {
      expect(sub(53,11)).to.be.equal(42);
    });
  })

  describe('Mult', () => {
    it('should return 4 when mult(2,2)', () => {
      expect(mult(2,2)).to.be.equal(4);
    });

    it('should return 42 when mult(3, 14)', () => {
      expect(mult(3,14)).to.be.equal(42);
    });
  });

  describe('Div', () => {
    it('should return 4 when div(8,2)', () => {
      expect(div(8,2)).to.be.equal(4);
    });

    it('should return `Não existe divisão por 0!` when div(3,0)', () => {
      expect(div(3,0)).to.be.equal('Não existe divisão por 0!');
    });
  });
});
