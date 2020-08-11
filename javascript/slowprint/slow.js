const lines = ["I am the first line", "I am second line!"];

async function printLines() {
  let el = document.getElementById("lines");
  for (let line of lines) {
    let p = document.createElement("p");
    el.appendChild(p);
    s = "";
    for (let char of line) {
      await delay(100);
      s += char;
      p.innerText = s;
    }
  }
}

async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

printLines();
