declare module 'colorthief' {
  export type Color = [number, number, number];

  interface ColorThief {
    getColor(
      sourceImage: HTMLImageElement | string,
      quality?: number,
    ): Promise<Color>;
    getPalette(
      sourceImage: HTMLImageElement | string,
      colorCount?: number,
      quality?: number,
    ): Promise<Color[]>;
  }

  const colorThief: ColorThief;
  export default colorThief;
}
