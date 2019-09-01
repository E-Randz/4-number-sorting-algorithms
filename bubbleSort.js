"use strict";
function bubbleSort(numArray) {
    var list = numArray.slice();
    var swapped = false;
    var end = list.length;
    do {
        swapped = false;
        for (var i = 0; i < end; i++) {
            if (list[i] > list[i + 1]) {
                var toSwap = list[i + 1];
                list[i + 1] = list[i];
                list[i] = toSwap;
                swapped = true;
            }
        }
        end--;
    } while (swapped);
    return list;
}
module.exports = { bubbleSort: bubbleSort };
