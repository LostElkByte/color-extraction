// import ColorThiefBrowser from '../node_modules/colorthief/dist/color-thief.mjs';
import ColorthiefNode from 'colorthief';

let colorThief: any;
if (typeof window !== 'undefined') {
  // 浏览器环境
  // colorThief = new ColorThiefBrowser();
} else {
  // Node.js 环境
  colorThief = ColorthiefNode;
}

/**
 * 提取图片主色
 * @param imgUrl
 * @param quality
 * @returns Promise<[number, number, number]>
 */
export const getMainColor = async (
  imgUrl: string,
  quality: number = 10,
): Promise<[number, number, number]> => {
  try {
    const color = await colorThief.getColor(imgUrl, quality);
    return color;
  } catch (err) {
    throw err;
  }
};

interface PaletteColorOptions {
  colorCount?: number;
  quality?: number;
}

/**
 * 提取图片调色板
 * @param imgUrl
 * @param options
 * @returns Promise<Array<[number, number, number]>>
 */
export const getPaletteColor = async (
  imgUrl: string,
  options: PaletteColorOptions = {},
): Promise<Array<[number, number, number]>> => {
  const { colorCount = 5, quality = 10 } = options;
  try {
    const colorPalette = await colorThief.getPalette(
      imgUrl,
      colorCount,
      quality,
    );
    return colorPalette;
  } catch (err) {
    throw err;
  }
};
