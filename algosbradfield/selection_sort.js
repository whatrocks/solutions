function swap(alist, m, n) {
    const temp = alist[m]
    alist[m] = alist[n]
    alist[n] = temp
}

function getMinimum(data, startIndex) {
    let minPos = startIndex
    for (let position = startIndex + 1; position < data.length; position++) {
        if (data[position] < data[minPos]) {
            minPos = position
        }
    }
    return minPos
}

function selectionSort(data) {
    for (let i = 0; i < data.length - 1; i++) {
        const k = getMinimum(data, i)
        console.log("i: ", i, "; k: ", k)
        if (i != k) {
            swap(data, i, k)
        }
    }
}

const unsorted = [1, 4, -3, 100, 10000, 15, 3]
selectionSort(unsorted);
console.log("done: ", unsorted)