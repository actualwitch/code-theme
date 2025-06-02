# Echoes of Void

A VSCode theme that combines muted pastel colors with pure black background.

## Features

- **OLED-friendly** - Pure black background (#000000) for perfect blacks on OLED displays
- **Trans pride colors** - Pink (#F7A8B8) and blue (#55CDFC) accents throughout the UI
- **Material Design inspired** - Soft pastel syntax highlighting with thoughtful color choices
- **Minimal borders** - Clean, distraction-free interface following Material Design aesthetics

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to generate the theme file
4. Run `npm run package` to create a `.vsix` file
5. Install the `.vsix` file in VSCode using the Extensions view

## Development

The theme is generated programmatically using TypeScript:

- `src/swatch.ts` - Color palette definitions
- `src/template.ts` - VSCode theme mapping
- `src/utils.ts` - Color manipulation utilities
- `src/index.ts` - Theme generator

To modify the theme, edit the color definitions in `swatch.ts` and run `npm run build` to regenerate `theme.json`.

## Color Philosophy

This theme uses a carefully curated palette that balances visibility with aesthetics:

- **Syntax colors** are Material Design pastels for comfortable long-term viewing
- **UI accents** use transgender flag colors for meaningful personal expression
- **Text opacity levels** follow Material Design guidelines (87%, 60%, 38%)
- **Black background** provides maximum contrast and OLED benefits

## License

MIT