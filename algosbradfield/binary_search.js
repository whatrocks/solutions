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
console.log(binarySearch(test, 3))
console.log(binarySearch(test, 13))