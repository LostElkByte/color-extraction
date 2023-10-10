import NearestColor from 'nearest-color';
import { colorKey } from '../dictionary/colorKey';
import { colorDictionary } from '../dictionary/colorDictionary';

const nearestColor = NearestColor.from(colorKey) as any;

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
