// generateColors.js
import chroma from 'chroma-js';

const numBaseColors = 3;
const numShades = 1;
const colorScheme = 'triadic';
const namingConvention = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

function randomHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, '0');
}

function generateShades(color, numShades) {
  const shades = [];
  const increment = 1 / numShades;

  for (let i = 1; i <= numShades; i++) {
    const light = chroma(color).brighten(i * increment).hex();
    const dark = chroma(color).darken(i * increment).hex();
    shades.push({ light, dark });
  }

  return shades;
}

function generateBaseColors(colorScheme, numBaseColors) {
  const baseColor = randomHexColor();
  const baseColors = [baseColor];

  const scale = chroma.scale([baseColor]).mode('hsl');
  const angle = 360 / numBaseColors;

  switch (colorScheme) {
    case 'triadic':
    case 'complementary':
    case 'splitComplementary':
    case 'analogous':
    case 'square':
    case 'tetradic':
      for (let i = 1; i < numBaseColors; i++) {
        baseColors.push(chroma(baseColor).set('hsl.h', `+${angle * i}`).hex());
      }
      break;
    default:
      console.log(`Color scheme ${colorScheme} not supported. Using the default 'triadic' scheme.`);
      for (let i = 1; i < numBaseColors; i++) {
        baseColors.push(chroma(baseColor).set('hsl.h', `+${angle * i}`).hex());
      }
      break;
  }

  return baseColors;
}

export function generateColors(numBaseColors, numShades, colorScheme) {
  const baseColors = generateBaseColors(colorScheme, numBaseColors);
  const colorShades = baseColors.map(color => generateShades(color, numShades));

  const orderedTokens = baseColors.reduce((tokens, color, index) => {
    const prefix = index === 0 ? 'primary' :
                   index === 1 ? 'secondary' :
                   index === 2 ? 'tertiary' : `color${index + 1}`;

    colorShades[index].forEach((shades, shadeIndex) => {
      if (shadeIndex < numShades) {
        tokens[`${prefix}-${namingConvention[5 - (shadeIndex + 1)]}`] = shades.light;
      }
      tokens[`${prefix}-${namingConvention[5]}`] = color;
      tokens[`${prefix}-${namingConvention[shadeIndex + 6]}`] =
      shades.dark;
    });

    return tokens;
  }, {});

  const orderedOutput = Object.entries(orderedTokens).sort((a, b) => {
    const prefixOrder = ['primary', 'secondary', 'tertiary', 'color4', 'color5'];
    const aPrefix = a[0].split('-')[0];
    const bPrefix = b[0].split('-')[0];
    const aNum = parseInt(a[0].split('-')[1]);
    const bNum = parseInt(b[0].split('-')[1]);
    if (aPrefix === bPrefix) {
      return aNum - bNum;
    } else {
      return prefixOrder.indexOf(aPrefix) - prefixOrder.indexOf(bPrefix);
    }
  }).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  return orderedOutput;
}
