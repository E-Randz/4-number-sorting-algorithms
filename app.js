"use strict";
function arrayGen(numSize, arrLen) {
    var numArray = [];
    for (var i = 0; i < arrLen; i++) {
        numArray.push(Math.round(Math.random() * numSize));
    }
    return numArray;
}
function bubbleSort(numArray) {
    var list = numArray.slice();
    var swapped = false;
    var end = list.length;
    console.log(list, '< == starting array');
    do {
        swapped = false;
        for (var i = 0; i < end; i++) {
            if (i === end - 1) {
                console.log(list);
            }
            if (list[i] > list[i + 1]) {
                var toSwap = list[i + 1];
                list[i + 1] = list[i];
                list[i] = toSwap;
                swapped = true;
            }
        }
        // list.forEach((item: number, i: number) => {
        //   if (i === list.length - 1) {
        //     console.log(`${count} ===>`, list);
        //   }
        //   if (item > list[i + 1]) {
        //     let toSwap = list[i + 1];
        //     list[i + 1] = item;
        //     list[i] = toSwap;
        //     swapped = true;
        //   }
        // });
        end--;
    } while (swapped);
    console.log('result ===>', list);
    return list;
}
// Bubble sort always needs one more pass of the array to make sure that
bubbleSort(arrayGen(100, 8));
