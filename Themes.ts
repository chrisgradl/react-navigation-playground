import merge from "deepmerge";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const CombinedDefaultTheme = merge(PaperDefaultTheme, DefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, DarkTheme);

export { CombinedDefaultTheme, CombinedDarkTheme };
