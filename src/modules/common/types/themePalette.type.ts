declare module '@mui/material/styles' {
  export interface Palette {
    white: Palette['primary'];
    black: Palette['primary'];
    green: Palette['primary'];
  }
  export interface PaletteOptions {
    white: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
  }
  export interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: false;
  }
}

export {};
