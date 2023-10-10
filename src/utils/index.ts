import { colord } from 'colord';
/**
 * [r,g,b]转换十六进制(HEX)
 * @param r
 * @param g
 * @param b
 * @returns
 */
export const rgbArrayToHex = (r: Number, g: Number, b: Number) =>
  '#' +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');

/**
 * 判断颜色值是否有效
 * @param color 颜色值
 * @returns 如果颜色值有效返回 true，否则返回 false
 */
export const isColorValid = (color: any): boolean => {
  const isColor = colord(color).isValid();
  return isColor;
};

/**
 * 将颜色值转换为 HEX 格式
 * @param color 颜色值，可以是 HEX、RGB、RGBA、HSL 或 HSLA 格式
 * @returns HEX 格式的颜色值
 */
export const convertToHex = (color: any): string => {
  try {
    const convertedColor = colord(color).toHex();
    return convertedColor;
  } catch (error) {
    // 处理无效颜色值的错误
    console.error('Invalid color:', color);
    return '';
  }
};

/**
 * 检查HEX颜色是否为6位的
 * @param hexColor HEX颜色值
 * @returns 如果颜色是6位的HEX格式返回 true，否则返回 false
 */
export const isHexColorValid = (hexColor: string): boolean => {
  // 使用正则表达式匹配6位HEX颜色值
  const hexRegex = /^#([0-9A-Fa-f]{6})$/;
  return hexRegex.test(hexColor);
};
