import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "Inter, Helvetica, sans-serif",
  heading: "Inter, Helvetica, sans-serif",
};

const components = {
  Button: defineStyleConfig({
    baseStyle: {
      color: "white",
      fontWeight: "normal",
      bgColor: "brand.blue",
      _hover: {
        opacity: 0.9,
      },
    },

    variants: {
      outline: {
        border: "1.2px solid",
        borderColor: "brand.blue",
        color: "brand.blue",
        _hover: {
          color: "white",
          bgColor: "brand.blue",
          opacity: 1,
        },
      },
      white: {
        borderWidth: "1.2px",
        borderColor: "transparent",
        bgColor: "white",
        color: "brand.blue",
        _hover: {
          color: "white",
          bgColor: "brand.blue",
          opacity: 1,
        },
      },
    },
    defaultProps: {
      colorScheme: "brand.blue",
    },
  }),

  Heading: defineStyleConfig({
    variants: {
      title: {
        fontWeight: "normal",
        fontSize: "lg",
      },
      sectionTitle: {
        fontWeight: "bold",
        fontSize: "2xl",
      },
    },
  }),
  Link: defineStyleConfig({
    baseStyle: {
      color: "brand.blue",
      fontWeight: "normal",
      _hover: {
        color: "brand.dark",
      },
    },
  }),
  Input: defineStyleConfig({
    baseStyle: {
      field: {
        fontFamily: "body",
        fontWeight: "normal",
        fontSize: "16",
        _placeholder: {
          fontSize: "15",
        },
        _disabled: {
          opacity: ".95",
        },
      },
    },
  }),
};

const colors = {
  brand: {
    blue: "#6689FF",
    green: "#34B690",
    black: "#1E1F23",
    black2: "#1C1D1F",
    dark: "#36332B",
    light: "#F5F5F5",
    muted: "#7E828B",
  },
};

const styles = {
  global: {
    body: {
      fontSize: "15px",
    },
    a: {
      color: "brand.blue",
      fontWeight: "normal",
      _hover: {
        color: "brand.dark",
      },
    },
  },
};

const appTheme = extendTheme({
  styles,
  fonts,
  components,
  semanticTokens: {
    colors,
  },
});

export default appTheme;
