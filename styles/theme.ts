import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontFamily: "Montserrat, sans-serif",
      },
      // styles for the `a`
      a: {
        _hover: {
          textDecoration: "none",
          color: "blue.100",
        },
      },
    },
  },
});
export default theme;
