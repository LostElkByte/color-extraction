// const ColorThief = require("colorthief");
import ColorThief from "colorthief";

/**
 * 提取图片主色
 */
const getMainColor = async (imgUrl) => {
  const mainColor = new Promise((resolve, reject) => {
    ColorThief.getColor(imgUrl, 10)
      .then((color) => {
        resolve(color);
      })
      .catch((err) => {
        reject(err);
      });
  });
  return mainColor;
};

getMainColor("img/QQ20211102-0.jpg").then((mainColor) => {
  console.log(mainColor);
});
