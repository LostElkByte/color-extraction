import { colorKey } from './utils/colorKey';
import { colorDictionary } from './utils/colorDictionary';
import { rgbToHex } from './utils/utils';
import NearestColor from 'nearest-color';
const nearestColor = NearestColor.from(colorKey) as any;
/**
 * 主色RBG转HEX
 * @param mainColor
 * @returns
 */
export const mainColorRgbToHex = (mainColor: Array<number>) => {
  return rgbToHex(mainColor[0], mainColor[1], mainColor[2]);
};

/**
 * 调色板RBG转HEX
 * @param paletteColor
 * @returns
 */
export const paletteColorRgbToHex = (paletteColor: Array<any>) => {
  // 调色板HEX颜色列表
  let paletteColornHexList = [] as Array<string>;
  // 调色板RBG转为HEX
  for (const itemColor of paletteColor) {
    // RBG转HEX
    const hexColor = rgbToHex(itemColor[0], itemColor[1], itemColor[2]);
    // PUSH进调色板HEX颜色列表
    paletteColornHexList.push(hexColor);
  }

  return paletteColornHexList;
};

/**
 * 传入一个HEX色号获取近似的色值
 * @param hexColor
 */
export const getNearestColor = (hexColor: string) => {
  return nearestColor(hexColor).name;
};

/**
 * 通过近似的色值获取中英文颜色名称
 * @param color
 * @returns
 */
export const getColorName = (color: any) => {
  // 通过颜色key获取颜色名称列表(除了第一个色号值)
  return colorDictionary[color].slice(1);
};
