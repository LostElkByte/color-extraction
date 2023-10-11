interface paletteColor {
    colorCount?: number;
    quality?: number;
}
declare const paletteColor: (img: string, { colorCount, quality }?: paletteColor) => Promise<object[]>;
declare const _default: {
    mainColor: (img: string, quality?: number) => Promise<{
        mainColorHex: string;
        colorName: any;
    }>;
    paletteColor: (img: string, { colorCount, quality }?: paletteColor) => Promise<object[]>;
    colorName: (color: any) => {
        color: any;
        colorName: any;
    };
};
export default _default;
