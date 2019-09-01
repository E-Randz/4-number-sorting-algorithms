function bubbleSort(numArray: number[]): number[] {
  let list: number[] = [...numArray];
  let swapped: Boolean = false;
  let end: number = list.length;

  do {
    swapped = false;

    for (let i = 0; i < end; i++) {
      if (list[i] > list[i + 1]) {
        let toSwap: number = list[i + 1];
        list[i + 1] = list[i];
        list[i] = toSwap;
        swapped = true;
      }
    }
    end--;
  } while (swapped);

  return list;
}

module.exports = { bubbleSort };
