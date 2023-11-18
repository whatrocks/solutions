var assert = require("assert");

function myAtoi(s) {

  function isDigit(c) {
    return c.charCodeAt() >= "0".charCodeAt() && c.charCodeAt() <= "9".charCodeAt(); 
  }

  if (!s.length) return 0;

  // trim leading whitespace
  // check for - or +
  // loop thru check for digit\
  let is_pos = 1;
  let set_sign = false;
  const digits = [];
  for (let c of s) {
    console.log("c: ", c);
    if (c === " ") {
      if (digits.length || set_sign) break;
      continue;
    }
    if (!digits.length && !set_sign) {
      if (c === "-") {
        is_pos = -1;
        set_sign = true;
        continue;
      } else if (c === "+") {
        set_sign = true;
        continue;
      //} else if (c === "0") {
      //  set_sign = true;
      //  continue;
      } else if (!isDigit(c)) {
        break;
      }
    }
    if (isDigit(c)) {
      digits.push(c);
    } else {
      break;
    }
  }
  console.log("digits: ", digits, set_sign, is_pos);
  // assemble number
  let res = 0;
  for (let i = 0; i < digits.length; i++) {
    let backIdx = digits.length - 1 - i
    let placeValue = digits[backIdx];
    res += (10 ** i) * placeValue;
  }
  
  // handle 32 bit size
  let answer = res * is_pos;
  if (answer < (-2) ** 31) return (-2) ** 31;
  if (answer > (2 ** 31) - 1) return (2 ** 31) - 1;
  console.log("answer: ", answer);
  return answer;
}

const cases = [
  ["", 0],
  ["42", 42],
  [" 42", 42],
  ["+42", 42],
  ["-42", -42],
  ["   -42", -42],
  ["4193 with words", 4193],
  ["   +0 123", 0],
  ["  0000000000012345678", 12345678],
  ["00000-42a1234", 0],
  ["0  123", 0],
  ["  +  413", 0],
]
for (let c of cases) {
  assert.equal(myAtoi(c[0]),c[1]);
}

