const throttle = function(func, limit) {
  let inThrottle;
  return function throttledFunction() {
    const args = arguments;
    const that = this;
    if (!inThrottle) {
      func.apply(that, args);
      inThrottle = true;
      setTimeout(function removeThrottle() {
        inThrottle = false;
      }, limit);
    }
  };
};

function sayILU() {
    console.log("I Love You!!")
}

const slow = throttle(sayILU, 1000);

slow("I love you");
slow("no");
slow("yes");
slow("bmayb");
slow("hehehehe");
