function swap(alist, m, n) {
    const temp  = alist[m]
    alist[m] = alist[n]
    alist[n] = temp;
}

function shuffle(data) {
    for (let i = 0; i < data.length; i++) {
        const randomIndex = Math.floor(Math.random() * data.length)
        swap(data, i, randomIndex)
    }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
shuffle(list)
console.log(list);