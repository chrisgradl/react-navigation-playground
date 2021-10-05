import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CombinedDarkTheme,
  CombinedDefaultTheme, Margherita,

} from "../Themes"; import {RootState} from "./types";

export type ThemeType = "default" | "dark" | "margherita";


const slice = createSlice({
  initialState: CombinedDefaultTheme,
  name: "Theme",
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      if (action.payload === "dark") {
        return CombinedDarkTheme;
      } else if (action.payload === "margherita") {
        return Margherita;
      } else {
        return CombinedDefaultTheme;
      }
    },
    setThemeColor: (
      state,
      action: PayloadAction<{ key: string; value: string }>
    ) => {
      const { key, value } = action.payload;
      if (value || value === "") {
        state.colors[key] = value;
      }
    },
  },
});

export const { setTheme, setThemeColor } = slice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default slice.reducer;
