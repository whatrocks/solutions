/*
 process.stdin.on('data', (d) => {
  var s = d.toString()
  var s2 = ''
  for (let c of s) {
    if (c === ".") {
      s2 += '!'
    } else {
      s2 += c
    }
  }
  console.log(new Buffer(s2))
})
*/

var DOT = '.'.charCodeAt(0)
var BANG = '!'.charCodeAt(0)

process.stdin.on('data', function(buff) {
  for (var i = 0; i < buff.length; i++) {
    if (buff[i] === DOT) {
      buff[i] = BANG
    }
  }
  console.log(buff);
})
