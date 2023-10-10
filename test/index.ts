import colorExtraction from '../src/index';
import { convertToHex, isColorValid } from '../src/utils';
import { getNearestColor } from '../src/common/nearestColor';
// colorExtraction
//   .mainColor('./img/QQ20211102-0.jpg', 10)
//   .then((colorName) => {
//     console.log(colorName);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// colorExtraction
//   .paletteColor('./img/QQ20211102-0.jpg', { colorCount: 5, quality: 10 })
//   .then((colorName) => {
//     console.log(colorName);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const a = convertToHex({ r: 255, g: 255, b: 255, a: 0 });
// console.log(a);
// const b = getNearestColor('#357edd2e');
// console.log(b);

console.log(isColorValid('#FFF22')); // true
console.log(isColorValid('rgb(255, 0, 0)')); // true
console.log(isColorValid('hsl(120, 100%, 50%)')); // true
console.log(isColorValid('rgba(255, 0, 0, 0.5)')); // false
console.log(isColorValid('invalid-color')); // false

console.log(convertToHex('hsl(120, 100%, 50%)'));

console.log(colorExtraction.colorName('#FFF'));
