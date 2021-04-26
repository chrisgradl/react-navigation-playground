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
import LivePreview from "./LivePreview";
import VLine from "./VLine";

const InspectorContainer = () => {
  const inspector = useAppSelector((state) => state.inspector);

  return (
    <ScrollView>
      {inspector.type === "Navigator" ? <Inspector /> : <ScreenInspector />}
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
      {preview === "Code" ? <CodePanel /> : <LivePreview />}
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
