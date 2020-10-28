// reverseInt.js
const reverseInt = num => {
    const invertedString = Math.abs(num).toString().split('')
      .map((_, index, arr) => arr[arr.length - index - 1]).join('');
  
    const invertedAbsNum = parseInt(invertedString);
    return num >= 0 ? invertedAbsNum : -invertedAbsNum
  }
  
  module.exports = reverseInt;
  
/*
  Math.abs('-1');     // 1
  Math.abs(-2);       // 2
  Math.abs(null);     // 0
  Math.abs('');       // 0
  Math.abs([]);       // 0
  Math.abs([2]);      // 2
  Math.abs([1,2]);    // NaN
  Math.abs({});       // NaN
  Math.abs('string'); // NaN
  Math.abs();         // NaN
*/