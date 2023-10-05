// index.js

function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function random() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  }
  
  function mod(num1, num2) {
    return num1 % num2;
  }
  
  function max(numbers) {
    return Math.max(...numbers);
  }
  
  module.exports = {
    multiply,
    random,
    mod,
    max,
  };
   