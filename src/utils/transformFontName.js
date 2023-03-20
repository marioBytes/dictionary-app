import supportedFonts from '../data/supportedFonts';

export function transformFontName(cssName) {
  const font = supportedFonts.find((font) => font.cssName === cssName);

  return font.name;
}
