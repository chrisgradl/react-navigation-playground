import React from "react";
import { ScrollView, View } from "react-native";
import { useAppSelector } from "../redux/store";
import NavigatorList from "./NavigatorList";
import Inspector from "./inspector/Inspector";
import ScreenInspector from "./inspector/ScreenInspector";
import PreviewSwitch from "./PreviewSwitch";
import { selectPreviewPanel } from "../redux/PreviewReducer";
import CodePanel from "./CodePanel";
import Header from "./Header";
import VLine from "./VLine";
import ThemeInspector from "./theme/ThemeInspector";
import DebugInspector from "./debug/DebugInspector";
import dynamic from "next/dynamic";
import { ActivityIndicator } from "react-native-paper";

const LivePreview = dynamic(() => import("./LivePreview"), {
  ssr: false,
});

export function LivePreviewWrapper() {
  const playgroundState = useAppSelector((state) => state);

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
  } else if (inspector.type === "Debug") {
    return <DebugInspector />;
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

const PreviewContainer = () => {
  const preview = useAppSelector(selectPreviewPanel);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 32,
      }}
    >
      {preview === "Code" ? <CodePanel /> : <LivePreviewWrapper />}
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
            <View
              style={{
                height: 38,
                backgroundColor: "lightgrey",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <PreviewSwitch />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
