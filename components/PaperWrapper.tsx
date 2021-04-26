import React from "react";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const fontConfig = {
  web: {
    regular: {
      fontFamily: "Inter, Helvetica, Roboto",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "Inter, Helvetica, Roboto",
      fontWeight: "500",
    },
    light: {
      fontFamily: "Inter, Helvetica, Roboto",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "Inter, Helvetica, Roboto",
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
