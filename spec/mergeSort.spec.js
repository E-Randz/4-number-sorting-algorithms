const { mergeSort } = require('../javascript/mergeSort.js');
const { expect } = require('chai');

describe('mergeSort', () => {
  it('returns an empty array if an empty array is passed', () => {
    expect(mergeSort([])).to.eql([]);
  });
  it('returns an one one number is an array of length 1 is passed', () => {
    expect(mergeSort([1])).to.eql([1]);
  });
  it('returns two numbers in the correct order', () => {
    expect(mergeSort([2, 1])).to.eql([1, 2]);
  });
  it('returns multiple in the correct order', () => {
    expect(mergeSort([2, 1, 0, 3])).to.eql([0, 1, 2, 3]);
    expect(mergeSort([6, 8, 4, 5, 9, 0, 3, 10, 1, 2, 7])).to.eql([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]);
  });
});
