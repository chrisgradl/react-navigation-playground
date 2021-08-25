import React from "react";
import { ScrollView, View } from "react-native";
import { useAppSelector } from "../redux/store";
import NavigatorList from "./NavigatorList";
import Inspector from "./inspector/Inspector";
import ScreenInspector from "./inspector/ScreenInspector";
import Header from "./Header";
import VLine from "./VLine";
import ThemeInspector from "./theme/ThemeInspector";
import { ActivityIndicator } from "react-native-paper";
import PreviewContainer from "./PreviewContainer";

const Content = () => {
  const inspector = useAppSelector((state) => state.inspector);

  let content;

  if (inspector.type === "Navigator") {
    content = <Inspector />;
  } else if (inspector.type === "Screen") {
    content = <ScreenInspector />;
  } else if (inspector.type === "Theme") {
    content = <ThemeInspector />;
  }

  return <ScrollView>{content}</ScrollView>;
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
            <Content />
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
