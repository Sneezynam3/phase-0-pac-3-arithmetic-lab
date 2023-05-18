// ```javascript
// 1 + 80; //=> 81
// 60 - 40; //=> 20
// 2 * 3.4; //=> 6.8
// 5.0 / 2.5; //=> 2
// ```

function add(a, b) {
    return a + b;
  }

function subtract(c, d) {
  return c - d;
}
function multiply(e, f) {
    return e * f;
  }

function divide(g, h) {
  return g / h;
}

function increment(i) {
    return i += 1;
}

function decrement(j) {
    return j -= 1;
}

//passes a string as a number
function makeInt(string){
    return parseInt(string, 10);
}

function preserveDecimal(string) {
    return parseFloat(string);
}