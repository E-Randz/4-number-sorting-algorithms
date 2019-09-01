function selectionSort(numArray: number[]) {
  let list: number[] = [...numArray];

  for (let i = 0; i < list.length - 1; i++) {
    let minInd: number = i;

    for (let j: number = i + 1; j < list.length; j++) {
      if (list[j]! <= list[minInd]) {
        minInd = j;
      }
    }

    let temp = list[i];
    list[i] = list[minInd];
    list[minInd] = temp;
  }
  return list;
}

module.exports = { selectionSort };
