"use strict";
function selectionSort(numArray) {
    var list = numArray.slice();
    for (var i = 0; i < list.length - 1; i++) {
        var minInd = i;
        for (var j = i + 1; j < list.length; j++) {
            if (list[j] <= list[minInd]) {
                minInd = j;
            }
        }
        var temp = list[i];
        list[i] = list[minInd];
        list[minInd] = temp;
    }
    return list;
}
module.exports = { selectionSort: selectionSort };
