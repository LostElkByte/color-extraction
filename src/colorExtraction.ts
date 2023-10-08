import ColorThief from 'colorthief';

/**
 * 提取图片主色
 * @param imgUrl
 * @returns
 */
export const getMainColor = (imgUrl: string, quality: number = 10) => {
  console.log(ColorThief);
  const mainColor = new Promise((resolve, reject) => {
    ColorThief.getColor(imgUrl, quality)
      .then((color: unknown) => {
        resolve(color);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
  return mainColor;
};

interface paletteColor {
  colorCount?: number;
  quality?: number;
}

/**
 * 提取图片调色板
 * @param img
 * @param {colorCount, quality}
 * @returns
 */
export const getPaletteColor = (
  imgUrl: string,
  { colorCount = 5, quality = 10 }: paletteColor = {},
) => {
  const paletteColor = new Promise((resolve, reject) => {
    ColorThief.getPalette(imgUrl, colorCount, quality)
      .then((color: unknown) => {
        resolve(color);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
  return paletteColor;
};
