import merge from "deepmerge";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {DarkTheme, DefaultTheme, Theme as RNTheme} from "@react-navigation/native";
import { Theme } from "react-native-paper/lib/typescript/types";

const CombinedDefaultTheme: CombinedTheme = merge(PaperDefaultTheme, DefaultTheme);
const CombinedDarkTheme: CombinedTheme = merge(PaperDarkTheme, DarkTheme);

export type CombinedTheme = Theme & RNTheme

const Margherita: CombinedTheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: "black",
    accent: "#03dac4",
    background: "tomato",
    surface: "#ffffff",
    error: "#B00020",
    text: "black",
    onBackground: "#000000",
    onSurface: "#000000",
    disabled: "rgba(0, 0, 0, 0.26)",
    placeholder: "rgba(0, 0, 0, 0.54)",
    backdrop: "rgba(0, 0, 0, 0.5)",
    notification: "rgb(255, 59, 48)",
    card: "yellow",
    border: "rgb(216, 216, 216)",
  },
  fonts: {
    regular: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "400",
    },
    medium: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "500",
    },
    light: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "300",
    },
    thin: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "100",
    },
  },
  animation: {
    scale: 1,
  },
};

export { CombinedDefaultTheme, CombinedDarkTheme, Margherita };
