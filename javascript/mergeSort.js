"use strict";
function merge(left, right, array) {
    var leftIx = 0;
    var rightIx = 0;
    var arrayIx = 0;
    while (leftIx < left.length && rightIx < right.length) {
        if (left[leftIx] < right[rightIx]) {
            array[arrayIx] = left[leftIx];
            leftIx++;
        }
        else {
            array[arrayIx] = right[rightIx];
            rightIx++;
        }
        arrayIx++;
    }
    // the while loop will break out once one of the array halves reaches the end. The remainder of the other half will be added to the resulting array. Only one of the below loops will run.
    for (var leftRem = leftIx; leftRem < left.length; leftRem++) {
        array[arrayIx] = left[leftRem];
        arrayIx++;
    }
    for (var rightRem = rightIx; rightRem < right.length; rightRem++) {
        array[arrayIx] = right[rightRem];
        arrayIx++;
    }
    return array;
}
function mergeSort(numArray) {
    var array = numArray.slice();
    var n = array.length;
    if (n < 2) {
        return array;
    }
    var mid = Math.floor(n / 2);
    var leftHalf = array.slice(0, mid);
    var rightHalf = array.slice(mid, array.length);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf), array);
}
module.exports = { mergeSort: mergeSort };
