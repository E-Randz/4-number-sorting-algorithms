function merge(left: any, right: any, array: any): number[] {
  let leftIx: number = 0;
  let rightIx: number = 0;
  let arrayIx: number = 0;

  while (leftIx < left.length && rightIx < right.length) {
    if (left[leftIx] < right[rightIx]) {
      array[arrayIx] = left[leftIx];
      leftIx++;
    } else {
      array[arrayIx] = right[rightIx];
      rightIx++;
    }
    arrayIx++;
  }

  // the while loop will break out once one of the array halves reaches the end. The remainder of the other half will be added to the resulting array. Only one of the below loops will run.

  for (let leftRem = leftIx; leftRem < left.length; leftRem++) {
    array[arrayIx] = left[leftRem];
    arrayIx++;
  }

  for (let rightRem = rightIx; rightRem < right.length; rightRem++) {
    array[arrayIx] = right[rightRem];
    arrayIx++;
  }

  return array;
}

function mergeSort(numArray: number[]): number[] {
  const array: number[] = [...numArray];
  const n: number = array.length;

  if (n < 2) {
    return array;
  }

  let mid: number = Math.floor(n / 2);
  const leftHalf: number[] = array.slice(0, mid);
  const rightHalf: number[] = array.slice(mid, array.length);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf), array);
}

module.exports = { mergeSort };
