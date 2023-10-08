/**
 * 转换十六进制
 * @param r
 * @param g
 * @param b
 * @returns
 */
export const rgbToHex = (r: Number, g: Number, b: Number) =>
  '#' +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');
