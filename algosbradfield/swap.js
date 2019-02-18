function swap(alist, m, n) {
    const temp = alist[m]
    alist[m] = alist[n]
    alist[n] = temp
}

var list = [1, 2, 3, 4]
swap(list, 1, 2)
console.log(list)