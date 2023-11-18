var assert = require("assert");

function reverse(n) {
  let s = n.toString();
  let negative_multiplier = 1;
  let res = 0;
 
  console.log(s);
  let idx = 0;
  let column = 0;
  if (s[idx] === "-") {
    negative_multiplier = -1;
    idx++;
    column--;
  }
  while (idx < s.length) {
    let placeValue = parseInt(s[idx]);
    console.log(placeValue);
    res += (10 ** (idx + column)) * placeValue;
    idx++;
  }

  let reversed = res * negative_multiplier;
  if ((reversed < ((-2)**31)) || (reversed > (2 ** 31 - 1))) {
    return 0;
  }
  return reversed;
}


assert.equal(reverse(123), 321);
assert.equal(reverse(-123), -321);
assert.equal(reverse(120), 21);
