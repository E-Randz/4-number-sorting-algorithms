"use strict";
function insertionSort(numArr) {
    var list = numArr.slice();
    if (!list.length || list.length === 1)
        return list;
    for (var startIx = 1; startIx < list.length; startIx++) {
        var val = list[startIx];
        innerLoop: for (var currIx = startIx - 1; currIx >= 0; currIx--) {
            if (val < list[currIx]) {
                // if val < current val you are comparing, save index of current val as the new index of val
                list[currIx + 1] = list[currIx];
                list[currIx] = val;
            }
            else {
                break innerLoop;
            }
        }
    }
    return list;
}
module.exports = { insertionSort: insertionSort };
