import React from "react";
import { ScrollView, View } from "react-native";
import Smartphone from "./Smartphone";
import PlaygroundRenderer from "./renderer/PlaygroundRenderer";
import { useAppSelector } from "../redux/store";
import { Appbar } from "react-native-paper";
import NavigatorList from "./NavigatorList";
import Inspector from "./inspector/Inspector";
import ScreenInspector from "./inspector/ScreenInspector";
import ErrorBoundary from "./ErrorBoundary";
import PreviewSwitch from "./PreviewSwitch";
import { selectPreviewPanel } from "../redux/PreviewReducer";
import CodePanel from "./CodePanel";

interface Props {}

const VLine = () => <View style={{ width: 1, backgroundColor: "grey" }} />;

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
      {preview === "Code" ? <CodePanel /> : <Preview />}
    </ScrollView>
  );
};

const Preview = () => {
  const playgroundState = useAppSelector((state) => state);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Smartphone>
        <ErrorBoundary>
          <PlaygroundRenderer playgroundState={playgroundState} />
        </ErrorBoundary>
      </Smartphone>
    </View>
  );
};

const Header = () => (
  <Appbar.Header>
    <Appbar.Content title="React-Navigation Playground"></Appbar.Content>
    <PreviewSwitch />
    <Appbar.Action
      icon="github"
      onPress={() =>
        window.open("https://github.com/chrisgradl/react-navigation-playground")
      }
    />
  </Appbar.Header>
);

const Playground: React.FC<Props> = () => {
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
        <View style={{ flex: 3 }}>
          <PreviewContainer />
        </View>
      </View>
    </View>
  );
};

export default Playground;
