const debounce = function(func, delay) {
  let inDebounce;
  return function() {
    const that = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(function() {
      func.apply(that, args);
    }, delay);
  };
};


function sayILU(thing) {
    console.log(thing)
}

const slow = debounce(sayILU, 1000);

slow("I love you");
slow("no");
slow("yes");
slow("bmayb");
slow("hehehehe");
