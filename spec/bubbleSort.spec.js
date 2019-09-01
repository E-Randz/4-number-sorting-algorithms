const { bubbleSort } = require('../javascript/bubbleSort');
const { expect } = require('chai');

describe('bubbleSort', () => {
  it('returns an empty array if an empty array is passed', () => {
    expect(bubbleSort([])).to.eql([]);
  });
  it('returns an one one number is an array of length 1 is passed', () => {
    expect(bubbleSort([1])).to.eql([1]);
  });
  it('returns two numbers in the correct order', () => {
    expect(bubbleSort([2, 1])).to.eql([1, 2]);
  });
  it('returns multiple in the correct order', () => {
    expect(bubbleSort([2, 1, 0, 3])).to.eql([0, 1, 2, 3]);
    expect(bubbleSort([6, 8, 4, 5, 9, 0, 3, 10, 1, 2, 7])).to.eql([
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
