var rand5 = function() {
    return Math.floor(Math.random() * 5) + 1;
}

var rand7 = function() {
    return (rand5() + rand5() + rand5() + rand5() + rand5() + rand5() + rand5()) % 7 + 1
}

var count = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
}

for (var i = 0; i < 1000000; i++) {
    const res = rand7();
    count[res]++
}

console.log(count)
