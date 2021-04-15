import React from "react";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const fontConfig = {
  web: {
    regular: {
      fontFamily: "Inter",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "Inter",
      fontWeight: "500",
    },
    light: {
      fontFamily: "Inter",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "Inter",
      fontWeight: "100",
    },
  },
};

const themeWithFonts = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig as any),
};

const PaperWrapper: React.FC = ({ children }) => {
  return <PaperProvider theme={themeWithFonts}>{children}</PaperProvider>;
};

export default PaperWrapper;
