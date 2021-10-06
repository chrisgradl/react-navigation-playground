import React from "react";
import { ScrollView, View } from "react-native";
import Sidebar from "./sidebar/Sidebar";
import NavigatorInspector from "./inspector/NavigatorInspector";
import ScreenInspector from "./inspector/ScreenInspector";
import Header from "./header/Header";
import VLine from "./misc/VLine";
import ThemeInspector from "./theme/ThemeInspector";
import { ActivityIndicator } from "react-native-paper";
import PreviewContainer from "./preview/PreviewContainer";
import { useAppSelector } from "../redux/types";

const Content = () => {
  const inspector = useAppSelector((state) => state.inspector);

  let content = null;

  if (inspector.type === "Navigator") {
    content = <NavigatorInspector />;
  } else if (inspector.type === "Screen") {
    content = <ScreenInspector />;
  } else if (inspector.type === "Theme") {
    content = <ThemeInspector />;
  }

  return <ScrollView style={{ flex: 1, padding: 16 }}>{content}</ScrollView>;
};

export default function Playground({ isLoading = false }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      {isLoading ? (
        <ActivityIndicator size={"large"} style={{ marginTop: 16 }} />
      ) : (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 16,
            }}
          >
            <Sidebar />
          </View>
          <VLine />
          <Content />
          <VLine />
          <View style={{ flex: 2 }}>
            <PreviewContainer />
          </View>
        </View>
      )}
    </View>
  );
}
