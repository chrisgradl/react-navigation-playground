import React from "react";
import { StyleSheet, View } from "react-native";
import PreviewSwitch, { PreviewPanel } from "./PreviewSwitch";
import CodePanel from "./CodePanel";
import { createSelector } from "@reduxjs/toolkit";
import { selectRootId } from "../../redux/RootIdReducer";
import { selectTheme } from "../../redux/ThemeReducer";
import dynamic from "next/dynamic";
import { PlaygroundState } from "../../types";
import { useAppSelector } from "../../redux/types";

const selectPlaygroundFromReduxState = createSelector(
  [selectRootId, (state) => state.navigators, selectTheme],
  (rootId, navigators, theme) => ({ rootId, navigators, theme })
);

const LivePreview = dynamic(() => import("./LivePreview"), {
  ssr: false,
});

function LivePreviewWrapper() {
  const playgroundState = useAppSelector<PlaygroundState>(
    selectPlaygroundFromReduxState
  );

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 16,
        alignItems: "center",
      }}
    >
      <LivePreview project={playgroundState} />
    </View>
  );
}

const PreviewContainer = () => {
  const [preview, setPreview] = React.useState<PreviewPanel>("UI");
  return (
    <>
      {preview === "Code" ? <CodePanel /> : <LivePreviewWrapper />}
      <View style={styles.bottomContainer}>
        <PreviewSwitch preview={preview} setPreview={setPreview} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    height: 38,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default PreviewContainer;
