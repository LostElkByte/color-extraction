import { rgbArrayToHex } from '../utils';

/**
 * 主色RBG转HEX
 * @param mainColor
 * @returns
 */
export const mainColorRgbToHex = (mainColor: Array<number>) => {
  return rgbArrayToHex(mainColor[0], mainColor[1], mainColor[2]);
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
    const hexColor = rgbArrayToHex(itemColor[0], itemColor[1], itemColor[2]);
    // PUSH进调色板HEX颜色列表
    paletteColornHexList.push(hexColor);
  }

  return paletteColornHexList;
};
