

var binarySearch = function(alist, item) {
    if (!alist.length) {
        return false
    }
    const midpoint = Math.floor(alist.length / 2)
    if (alist[midpoint] === item) {
        return true
    }

    if (alist[midpoint] < item) {
        const firstHalf = alist.slice(0, midpoint)
        return binarySearch(firstHalf, item)
    }

    const secondHalf = alist.slice(midpoint + 1)
    return binarySearch(secondHalf, item)
}

const test = [0, 1, 2, 8, 13, 17, 19, 32, 42];
// console.log(binarySearch(test, 3))
// console.log(binarySearch(test, 13))

var binarySearchWithoutRecursion = function(alist, item) {
    if (!alist.length) {
        return false;
    }

    let startIdx = 0;
    let endIdx = alist.length;

    while (endIdx - startIdx > 1) {
        const midIdx = Math.floor((endIdx + startIdx) / 2)
        console.log("checking: ", midIdx);
        const value = alist[midIdx]
        if (item < value) {
            // search left
            endIdx = midIdx
        } else if (item === value) {
            // found it
            return true
        } else {
            // search right
            startIdx = midIdx + 1
        }
    }

    console.log("start: ", startIdx)
    console.log("end: ", endIdx)
    if (startIdx === endIdx) {
        return false
    } else {
        return alist[startIdx] === item
    }

    
}

const testz = [0, 1, 2, 8, 13, 17, 19, 32, 42];
console.log(binarySearchWithoutRecursion(testz, 3))
console.log(binarySearchWithoutRecursion(testz, 13))