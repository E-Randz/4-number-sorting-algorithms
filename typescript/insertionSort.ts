function insertionSort(numArr: number[]): number[] {
  let list: number[] = [...numArr];

  if (!list.length || list.length === 1) return list;

  for (let startIx = 1; startIx < list.length; startIx++) {
    let val: number = list[startIx];

    innerLoop: for (let currIx = startIx - 1; currIx >= 0; currIx--) {
      if (val < list[currIx]) {
        // if val < current val you are comparing, save index of current val as the new index of val
        list[currIx + 1] = list[currIx];
        list[currIx] = val;
      } else {
        break innerLoop;
      }
    }
  }

  return list;
}

module.exports = { insertionSort };
