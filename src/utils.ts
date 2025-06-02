import * as d3 from 'd3';

// Transgender flag colors
export const transColors = {
  pink: '#F7A8B8',
  blue: '#55CDFC',
  white: '#FFFFFF',
};

// Material Design color generation utilities
export function withOpacity(color: string, opacity: number): string {
  const hex = Math.round(opacity * 255).toString(16).padStart(2, '0');
  return color + hex;
}

export function lighten(color: string, amount: number): string {
  const hsl = d3.hsl(color);
  hsl.l = Math.min(1, hsl.l + amount);
  return hsl.formatHex();
}

export function darken(color: string, amount: number): string {
  const hsl = d3.hsl(color);
  hsl.l = Math.max(0, hsl.l - amount);
  return hsl.formatHex();
}

export function desaturate(color: string, amount: number): string {
  const hsl = d3.hsl(color);
  hsl.s = Math.max(0, hsl.s - amount);
  return hsl.formatHex();
}

// Create pastel version of a color (Material Design inspired)
export function pastel(color: string): string {
  const hsl = d3.hsl(color);
  // Increase lightness and decrease saturation for pastel effect
  hsl.s = hsl.s * 0.6;
  hsl.l = 0.75 + (hsl.l * 0.15);
  return hsl.formatHex();
}

// Generate Material Design inspired color palette
export function generateMaterialPalette(baseColor: string) {
  return {
    50: lighten(desaturate(baseColor, 0.5), 0.4),
    100: lighten(desaturate(baseColor, 0.4), 0.3),
    200: lighten(desaturate(baseColor, 0.3), 0.2),
    300: lighten(desaturate(baseColor, 0.2), 0.1),
    400: lighten(baseColor, 0.05),
    500: baseColor,
    600: darken(baseColor, 0.05),
    700: darken(baseColor, 0.1),
    800: darken(baseColor, 0.15),
    900: darken(baseColor, 0.2),
  };
}

// Mix two colors
export function mix(color1: string, color2: string, weight: number = 0.5): string {
  const rgb1 = d3.rgb(color1);
  const rgb2 = d3.rgb(color2);
  
  return d3.rgb(
    rgb1.r * (1 - weight) + rgb2.r * weight,
    rgb1.g * (1 - weight) + rgb2.g * weight,
    rgb1.b * (1 - weight) + rgb2.b * weight
  ).formatHex();
}