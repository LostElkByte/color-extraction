declare module 'colorthief' {
  export default class ColorThief {
    constructor();
    getColor(
      sourceImage: HTMLImageElement,
      quality?: number,
    ): [number, number, number];
    getPalette(
      sourceImage: HTMLImageElement,
      colorCount?: number,
      quality?: number,
    ): Array<[number, number, number]>;
  }
}
