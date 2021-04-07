import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const slice = createSlice({
  initialState: "",
  name: "SelectedScreen",
  reducers: {
    setSelectedScreen: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const { setSelectedScreen } = slice.actions;

export const selectSelectedScreen = (state: RootState) =>
  state.navigators[state.selectedNavigatorId]?.screens[state.selectedScreenId];

export default slice.reducer;
