import { getMainColor, getPaletteColor } from './colorThief';
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
const mainColor = async (img: string, quality?: number) => {
  // 主色
  let mainColor: any;

  // 提取主色
  mainColor = await getMainColor(img, quality);

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

interface paletteColor {
  colorCount?: number;
  quality?: number;
}
/**
 * 提取图片调色板的色号以及颜色名称
 * @param img
 * @param {colorCount, quality}
 * @returns
 */
const paletteColor = async (
  img: string,
  { colorCount = 5, quality = 10 }: paletteColor = {},
) => {
  // 调色板
  let paletteColor: any;

  // 提取调色板
  paletteColor = await getPaletteColor(img, { colorCount, quality });

  // 调色板Hex
  let paletteColorHexs: Array<string>;

  // 主色RGB转Hex
  paletteColorHexs = paletteColorRgbToHex(paletteColor);

  // 调色板调色板的色号以及颜色名称列表
  let paletteColorAndNameList: Array<object> = [];

  // 获取最近似的色值
  for (const paletteColorHex of paletteColorHexs) {
    const nearestColor = getNearestColor(paletteColorHex);
    // 通过近似的色值获取中英文颜色名称
    const colorName = getColorName(nearestColor);
    paletteColorAndNameList.push({ paletteColorHex, colorName });
  }

  return paletteColorAndNameList;
};

const colorExtraction = {
  mainColor,
  paletteColor,
};

export default colorExtraction;

colorExtraction
  .mainColor('img/QQ20211102-0.jpg', 10)
  .then((colorName) => {
    console.log(colorName);
  })
  .catch((err) => {
    console.log(err);
  });

// colorExtraction
//   .paletteColor('img/QQ20211102-0.jpg', { colorCount: 5, quality: 10 })
//   .then((colorName) => {
//     console.log(colorName);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
