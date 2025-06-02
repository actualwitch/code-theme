import { withOpacity, pastel, mix, transColors } from './utils.ts';

// Pure black for OLED
const black = '#000000';
const white = '#FFFFFF';
const transparent = '#00000000';

// Material Design inspired colors with transgender flag integration
const materialColors = {
  // Primary colors from trans flag
  pink: transColors.pink,
  blue: transColors.blue,
  white: transColors.white,
  
  // Material Design pastel colors
  pastelPink: pastel(transColors.pink),
  pastelBlue: pastel(transColors.blue),
  
  // Additional Material Design colors for syntax highlighting
  purple: '#CE93D8',  // Material Purple 200
  cyan: '#80DEEA',    // Material Cyan 200
  teal: '#80CBC4',    // Material Teal 200
  green: '#A5D6A7',   // Material Green 200
  yellow: '#FFF59D',  // Material Yellow 200
  orange: '#FFCC80',  // Material Orange 200
  red: '#EF9A9A',     // Material Red 200
  
  // UI colors
  surface: withOpacity(white, 0.05),
  surfaceDark: withOpacity(black, 0.75),
  surfaceHighlight: withOpacity(white, 0.08),
  border: withOpacity(white, 0.12),
  
  // Text colors
  textPrimary: withOpacity(white, 0.87),
  textSecondary: withOpacity(white, 0.60),
  textDisabled: withOpacity(white, 0.38),
  textHint: withOpacity(white, 0.12),
};

// Main theme palette with Material Design approach
export const echoesOfVoid = {
  // Backgrounds
  background: black,
  backgroundLight: materialColors.surface,
  backgroundDark: black,
  backgroundHighlight: materialColors.surfaceHighlight,
  
  // Foregrounds
  foreground: materialColors.textPrimary,
  foregroundSecondary: materialColors.textSecondary,
  foregroundDisabled: materialColors.textDisabled,
  
  // Trans pride accent colors
  accent: materialColors.pink,
  accentAlternate: materialColors.blue,
  accentLight: materialColors.pastelPink,
  accentAlternateLight: materialColors.pastelBlue,
  
  // Borders and separators (minimal, Material Design style)
  border: transparent,  // No separators for Material Design look
  borderSubtle: materialColors.textHint,
  
  // Selection and highlights
  selection: withOpacity(materialColors.blue, 0.3),
  selectionInactive: withOpacity(materialColors.blue, 0.15),
  
  // Status colors (pastel Material Design)
  error: materialColors.red,
  errorBackground: withOpacity(materialColors.red, 0.1),
  warning: materialColors.orange,
  warningBackground: withOpacity(materialColors.orange, 0.1),
  info: materialColors.blue,
  infoBackground: withOpacity(materialColors.blue, 0.1),
  success: materialColors.green,
  successBackground: withOpacity(materialColors.green, 0.1),
  
  // Syntax highlighting colors (Material Design pastels)
  syntax: {
    // Core language constructs
    keyword: materialColors.purple,
    storage: materialColors.pink,
    operator: materialColors.cyan,
    
    // Types and classes
    type: materialColors.blue,
    class: materialColors.teal,
    interface: mix(materialColors.blue, materialColors.teal),
    
    // Functions and methods
    function: materialColors.green,
    method: materialColors.green,
    
    // Variables and parameters
    variable: materialColors.textPrimary,
    parameter: materialColors.orange,
    property: materialColors.cyan,
    
    // Literals
    string: materialColors.yellow,
    number: materialColors.orange,
    boolean: materialColors.orange,
    null: materialColors.red,
    
    // Comments and docs
    comment: materialColors.textDisabled,
    docComment: materialColors.textSecondary,
    
    // Tags and attributes (HTML/JSX)
    tag: materialColors.pink,
    attribute: materialColors.purple,
    
    // Special
    regex: materialColors.teal,
    escape: materialColors.red,
    punctuation: materialColors.textSecondary,
  },
  
  // Additional UI colors
  none: transparent,
  white: white,
  black: black,
};

// Legacy color scheme for compatibility
export const transRights = {
  background: black,
  accents: materialColors.pink,
  accentAlternate: materialColors.blue,
  text: materialColors.white,
  textPale: materialColors.textSecondary,
  textBarelyReadable: materialColors.textHint,
  transparent,
  red: materialColors.pink,
};