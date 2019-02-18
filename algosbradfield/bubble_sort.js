function swap(alist, m, n) {
    const temp = alist[m]
    alist[m] = alist[n]
    alist[n] = temp
}

function bubbleSort(alist) {
    const n = alist.length;
    for (let i = n - 1; i > 0; i--) {
        console.log("i: ", i, ", alist: ", alist);
        for (let j = 0; j < i; j++) {
            // console.log("j: ", j)
            if (alist[j] > alist[j + 1]) {
                console.log("swapping: ", alist[j], ", ", alist[j + 1])
                swap(alist, j, j +1)
            }
        }
    }
}

const unsorted = [1, 4, -3, 100, 10000, 15, 3]
bubbleSort(unsorted);
console.log("done: ", unsorted)