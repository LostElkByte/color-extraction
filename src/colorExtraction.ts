import ColorThief from 'colorthief';

/**
 * 提取图片主色
 * @param imgUrl
 * @returns
 */
export const getMainColor = (imgUrl: string) => {
  const mainColor = new Promise((resolve, reject) => {
    ColorThief.getColor(imgUrl, 10)
      .then((color: unknown) => {
        resolve(color);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
  return mainColor;
};

/**
 * 提取图片调色板
 * @param imgUrl
 * @returns
 */
export const getPaletteColor = (imgUrl: string) => {
  const paletteColor = new Promise((resolve, reject) => {
    ColorThief.getPalette(imgUrl, 8)
      .then((color: unknown) => {
        resolve(color);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
  return paletteColor;
};
