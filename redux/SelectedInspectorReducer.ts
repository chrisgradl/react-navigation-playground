import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "./types";

export interface SelectedInspector {
  type: "Screen" | "Navigator" | "Theme" | "Debug";
  navigatorId: string;
  screenId?: string;
}

const slice = createSlice({
  initialState: {
    type: "Navigator",
    navigatorId: "1",
    screenId: undefined,
  } as SelectedInspector,
  name: "SelectedInspector",
  reducers: {
    setSelectedInspector: (state, action: PayloadAction<SelectedInspector>) =>
      action.payload,
  },
});

export const { setSelectedInspector } = slice.actions;



export const selectNavigator = (state: RootState) =>
  state.navigators[state.inspector.navigatorId];

export const selectScreen = (state: RootState) =>
  state.navigators[state.inspector?.navigatorId]?.screens[
    state.inspector?.screenId
  ];

export default slice.reducer;
