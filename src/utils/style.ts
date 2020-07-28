import { SxStyleProp } from "rebass";

const hexToRGB = (colorHex: string) => {
  if (/^#([0-9A-F]{3}){1,2}$/i.test(colorHex)) {
    let R = parseInt(colorHex.substring(1, 3), 16);
    let G = parseInt(colorHex.substring(3, 5), 16);
    let B = parseInt(colorHex.substring(5, 7), 16);
    return {
      R,
      G,
      B,
    };
  }

  return null;
};

export const lightenDarkenColor = (colorHex: string, percent: number) => {
  if (/^#([0-9A-F]{3}){1,2}$/i.test(colorHex)) {
    let R = parseInt(colorHex.substring(1, 3), 16);
    let G = parseInt(colorHex.substring(3, 5), 16);
    let B = parseInt(colorHex.substring(5, 7), 16);

    if (percent > 100) {
      // Lighten
      const refinedPercent = percent > 200 ? 200 : percent;
      R =
        R === 0
          ? (255 * (refinedPercent - 100) / 100)
          : R + ((255 - R) * (refinedPercent - 100) / 100);
      G =
        G === 0
          ? (255 * (refinedPercent - 100) / 100)
          : G + ((255 - G) * (refinedPercent - 100) / 100);
      B =
        B === 0
          ? (255 * (refinedPercent - 100) / 100)
          : B + ((255 - B) * (refinedPercent - 100) / 100);
    } else if (percent < 100) {
      // Darken
      const refinedPercent = percent < 0 ? 0 : percent;
      R = (R * refinedPercent) / 100;
      G = (G * refinedPercent) / 100;
      B = (B * refinedPercent) / 100;
    }

    const RR =
      R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
    const GG =
      G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
    const BB =
      B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

    return `#${RR}${GG}${BB}`;
  }

  return colorHex;
};

export const calculateContrastColor = (colorHex: string) => {
  const colorRGB = hexToRGB(colorHex);

  if (colorRGB) {
    const luma =
      colorRGB.R * 0.2126 + colorRGB.G * 0.7152 + colorRGB.B * 0.0722;
    return luma >= 165 ? 'black' : 'white';
  }
  return null;
};

export const desktop = (style: SxStyleProp) => {
  return {
    '@media screen and (min-width: 40em)': style
  }
}

export const mobile = (style: SxStyleProp) => {
  return {
    '@media screen and (max-width: 40em)': style
  }
}
