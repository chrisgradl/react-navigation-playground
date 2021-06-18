import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigationState } from "@react-navigation/native";
import { RootState } from "./store";

const slice = createSlice({
  initialState: null as NavigationState,
  name: "NavigationState",
  reducers: {
    setNavigationState: (state, action: PayloadAction<NavigationState>) =>
      action.payload,
  },
});

export const { setNavigationState } = slice.actions;

export const selectNavigationState = (state: RootState) =>
  state.navigationState;

export default slice.reducer;
