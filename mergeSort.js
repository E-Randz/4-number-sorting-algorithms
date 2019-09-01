"use strict";
function mergeSort(numArray) {
    var array = numArray.slice();
    var n = array.length;
    if (n < 2)
        return array;
    var mid = Math.floor(n / 2);
    var leftHalf = array.slice(0, mid);
    var rightHalf = array.slice(mid, array.length);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf), array);
}
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
module.exports = { mergeSort: mergeSort };
