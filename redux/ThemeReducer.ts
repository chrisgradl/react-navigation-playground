import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { CombinedDarkTheme, CombinedDefaultTheme } from "../Themes";

export type ThemeType = "default" | "dark";

const slice = createSlice({
  initialState: CombinedDefaultTheme,
  name: "Theme",
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      if (action.payload === "dark") {
        return CombinedDarkTheme;
      } else {
        return CombinedDefaultTheme;
      }
    },
  },
});

export const { setTheme } = slice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default slice.reducer;
