function* numbersInRange(min, max) {
  for (let i = min; i < max; i++) {
    yield i;
  }
}

const generator = numbersInRange(2,4);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log(Array.from(numbersInRange(2,4)));

