import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const slice = createSlice({
  initialState: "1",
  name: "SelectedNavigator",
  reducers: {
    setSelectedNavigator: (state, action: PayloadAction<string>) =>
      action.payload,
  },
});

export const { setSelectedNavigator } = slice.actions;

export const selectSelectedNavigator = (state: RootState) =>
  state.navigators[state.selectedNavigatorId];

export default slice.reducer;
