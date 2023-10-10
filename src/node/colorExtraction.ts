import Colorthief from 'colorthief';

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
    const color = await Colorthief.getColor(imgUrl, quality);
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
    const colorPalette = await Colorthief.getPalette(
      imgUrl,
      colorCount,
      quality,
    );
    return colorPalette;
  } catch (err) {
    throw err;
  }
};
