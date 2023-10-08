import { getMainColor, getPaletteColor } from './colorExtraction';
import {
  mainColorRgbToHex,
  paletteColorRgbToHex,
  getNearestColor,
  getColorName,
} from './colorConversion';

/**
 * 提取图片主色的色号以及颜色名称
 * @param img
 * @returns
 */
export const imageColorExtraction = async (img: string) => {
  // 主色
  let mainColor: any;

  // 提取主色
  mainColor = await getMainColor(img);

  // 如果提取RGB主色失败 选取调色板的第一个色值
  if (!mainColor) {
    // 提取调色板
    const paletteColor = await getPaletteColor(img);
    mainColor = paletteColor[0];
  }

  // 主色Hex
  let mainColorHex: string;

  // 主色RGB转Hex
  mainColorHex = mainColorRgbToHex(mainColor);

  // 获取最近似的色值
  const nearestColor = getNearestColor(mainColorHex);

  // 通过近似的色值获取中英文颜色名称
  const colorName = getColorName(nearestColor);

  return { mainColorHex, colorName };
};

imageColorExtraction('img/QQ20211102-0.jpg')
  .then((colorName) => {
    console.log(colorName);
  })
  .catch((err) => {
    console.log(err);
  });
