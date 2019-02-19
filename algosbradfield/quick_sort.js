function swap(alist, m, n) {
    console.log("swapping: ", m, n)
    const temp = alist[m]
    alist[m] = alist[n]
    alist[n] = temp;
}

function quicksort(data) {
    // USES RECURSION
    // avg time is O(n log n), but worst case is O(n^2)

    function qs(data, lowIndex, highIndex) {
        console.log(lowIndex, highIndex)

        let afterSmall = lowIndex
        let beforeBig = highIndex
        let pivot = data[Math.floor((lowIndex + highIndex) / 2)]
        while (afterSmall <= beforeBig) {
            while (data[afterSmall] < pivot) {
                afterSmall++;
            }
            while (pivot < data[beforeBig]) {
                beforeBig--;
            }
            if (afterSmall <= beforeBig) {
                swap(data, afterSmall, beforeBig)
                afterSmall++
                beforeBig--;
            }
        }

        console.log("lowIndex: ", lowIndex)
        console.log("highIndex: ", highIndex)
        console.log("beforeBig: ", beforeBig)
        console.log("afterSmall: ", afterSmall)

        if (lowIndex < beforeBig) {
            qs(data, lowIndex, beforeBig)
        }
        if (afterSmall < highIndex) {
            qs(data, afterSmall, highIndex)
        }

    }

    qs(data, 0, data.length -1)
}

const unsorted = [1, 4, -3, 100, 10000, 15, 3]
quicksort(unsorted);
console.log("done: ", unsorted)