import React from "react";
import { StyleSheet, Text, View } from "react-native";
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

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig as any),
};

const PaperWrapper: React.FC = ({ children }) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default PaperWrapper;
