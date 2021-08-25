import React from "react";
import { ScrollView, View } from "react-native";
import { useAppSelector } from "../redux/store";
import NavigatorList from "./NavigatorList";
import Inspector from "./inspector/Inspector";
import ScreenInspector from "./inspector/ScreenInspector";
import Header from "./Header";
import VLine from "./VLine";
import ThemeInspector from "./theme/ThemeInspector";
import dynamic from "next/dynamic";
import { ActivityIndicator } from "react-native-paper";
import { PlaygroundState } from "../types";
import { createSelector } from "@reduxjs/toolkit";
import { selectRootId } from "../redux/RootIdReducer";
import { selectTheme } from "../redux/ThemeReducer";
import PreviewContainer from "./PreviewContainer";


const selectPlaygroundFromReduxState = createSelector(
  [selectRootId, (state) => state.navigators, selectTheme],
  (rootId, navigators, theme) => ({ rootId, navigators, theme })
);

const LivePreview = dynamic(() => import("./LivePreview"), {
  ssr: false,
});

export function LivePreviewWrapper() {
  const playgroundState = useAppSelector<PlaygroundState>(
    selectPlaygroundFromReduxState
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <LivePreview project={playgroundState} />
    </View>
  );
}

const InspectorSwitch = () => {
  const inspector = useAppSelector((state) => state.inspector);

  if (inspector.type === "Navigator") {
    return <Inspector />;
  } else if (inspector.type === "Screen") {
    return <ScreenInspector />;
  } else if (inspector.type === "Theme") {
    return <ThemeInspector />;
  }

  return null;
};

const InspectorContainer = () => {
  return (
    <ScrollView>
      <InspectorSwitch />
    </ScrollView>
  );
};

export default function Playground({ isLoading = false }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      {isLoading ? (
        <ActivityIndicator size={"large"} style={{ marginTop: 16 }} />
      ) : (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 16, backgroundColor: "#fafafa" }}>
            <NavigatorList />
          </View>
          <VLine />
          <View style={{ flex: 1, padding: 16 }}>
            <InspectorContainer />
          </View>
          <VLine />
          <View style={{ flex: 2 }}>
            <PreviewContainer />
          </View>
        </View>
      )}
    </View>
  );
}
