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
import { LivePreviewWrapper } from "./LivePreview";
import VLine from "./VLine";
import ThemeInspector from "./theme/ThemeInspector";
import DebugInspector from "./debug/DebugInspector";

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

export default function Playground() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, padding: 16 }}>
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
    </View>
  );
}
