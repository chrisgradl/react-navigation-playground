import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "./types";

const slice = createSlice({
  initialState: "1",
  name: "RootId",
  reducers: {
    setRootId: (state, action: PayloadAction<string>) =>
      action.payload,
  },
});

export const { setRootId } = slice.actions;

export const selectRootId = (state: RootState) => state.rootId;

export default slice.reducer;
