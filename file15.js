// 05 - Closures and utility functions: counter, debounce, memoize, deep clone
function makeCounter() {
  let n = 0;
  return { inc: () => ++n, dec: () => --n, get: () => n };
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function memoize(fn) {
  const cache = new Map();
  return (n) => {
    if (!cache.has(n)) cache.set(n, fn(n));
    return cache.get(n);
  };
}

const fib = memoize((n) => (n < 2 ? n : fib(n - 1) + fib(n - 2)));

const counter = makeCounter();
counter.inc();
counter.inc();
console.log("Counter:", counter.get());
console.log("fib(40):", fib(40));
console.log("Clone:", structuredClone({ a: [1, 2, { b: 3 }] }));

const log = debounce((msg) => console.log("Debounced:", msg), 100);
log("a");
log("b");
log("c"); // only "c" prints
