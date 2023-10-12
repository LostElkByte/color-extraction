import { isColorValid, convertToHex } from '../src/utils/index';

console.log(isColorValid('#fff'));
console.log(convertToHex('hsla(0, 100%, 50%, 0.5)'));

// import tinycolor from 'tinycolor2';

// // var color = tinycolor('red');
// // console.log(color);
// // color.isDark(); // false
// const color1 = tinycolor('transparent');
// const is = color1.isValid(); // true
// console.log(is);

// var color = tinycolor({ r: 255, g: 0, b: 0, a: 1 });
// const hex = color.toHexString();
// console.log(hex);
