import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#F5F5F5",
    },
    secondary: {
      light: "#ffa54b",
      main: "#d27619",
      dark: "#9b4900",
      contrastText: "#000",
    },
    background: {
      default: "#212121",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
