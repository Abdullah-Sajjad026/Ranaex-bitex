import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "IBM Plex Sans, Helvetica, sans-serif",
  heading: "IBM Plex Sans, Helvetica, sans-serif",
};

const components = {
  Button: defineStyleConfig({
    baseStyle: {
      color: "brand.black",
      fontWeight: "normal",
      bgColor: "brand.primary",
      _hover: {
        opacity: 0.9,
      },
    },

    variants: {
      default: {
        color: "brand.black",
        fontWeight: "normal",
        bgColor: "brand.primary",
        _hover: {
          opacity: 0.9,
        },
      },
      outline: {
        border: "1.2px solid",
        borderColor: "brand.primary",
        color: "brand.primary",
        _hover: {
          color: "white",
          bgColor: "brand.primary",
          opacity: 1,
        },
      },
      white: {
        borderWidth: "1.2px",
        borderColor: "transparent",
        bgColor: "white",
        color: "brand.primary",
        _hover: {
          color: "white",
          bgColor: "brand.primary",
          opacity: 1,
        },
      },
    },
    defaultProps: {
      variant: "default",
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
      color: "brand.primary",
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
    primary: "#FCD535",
    green: "#34B690",
    black: "#202630",
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
      color: "brand.black",
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
