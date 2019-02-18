function swap(alist, m, n) {
    const temp = alist[m]
    alist[m] = alist[n]
    alist[n] = temp
}

function insertionSort(data) {
    const n = data.length;
    for (let j = 1; j < n; j++) {
        console.log("j: ", j, "; data: ", data);
        for (let i = j; i > 0 && data[i] < data[i - 1]; i--) {
            console.log("swapping: ", data[i], data[i -1])
            swap(data, i, i - 1)
        }
    }
}

const unsorted = [1, 4, -3, 100, 10000, 15, 3]
insertionSort(unsorted);
console.log("done: ", unsorted)