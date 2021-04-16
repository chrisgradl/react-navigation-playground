import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type PreviewPanel = "UI" | "Code";

const slice = createSlice({
  initialState: "UI" as PreviewPanel,
  name: "Preview",
  reducers: {
    setPreview: (state, action: PayloadAction<PreviewPanel>) => action.payload,
  },
});

export const { setPreview } = slice.actions;

export const selectPreviewPanel = (state: RootState) => state.preview;

export default slice.reducer;
