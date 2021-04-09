import React from "react";
import { View } from "react-native";
import Smartphone from "./Smartphone";
import PlaygroundRenderer from "./renderer/PlaygroundRenderer";
import { useAppSelector } from "../redux/store";
import { Appbar } from "react-native-paper";
import * as Linking from "expo-linking";
import NavigatorList from "./NavigatorList";
import Inspector from "./inspector/Inspector";
import ScreenInspector from "./inspector/ScreenInspector";
import ErrorBoundary from "./ErrorBoundary";

interface Props {}

const VLine = () => <View style={{ width: 1, backgroundColor: "grey" }} />;

const InspectorContainer = () => {
  const inspector = useAppSelector((state) => state.inspector);

  if (inspector.type === "Navigator") {
    return <Inspector />;
  } else {
    return <ScreenInspector />;
  }
};

const Preview = () => {
  const playgroundState = useAppSelector((state) => state);
  return (
    <Smartphone>
      <ErrorBoundary>
        <PlaygroundRenderer playgroundState={playgroundState} />
      </ErrorBoundary>
    </Smartphone>
  );
};

const Header = () => (
  <Appbar.Header>
    <Appbar.Content title="React-Navigation Playground"></Appbar.Content>
    <Appbar.Action
      icon="github"
      onPress={() =>
        Linking.openURL(
          "https://github.com/chrisgradl/react-navigation-playground"
        )
      }
    />
  </Appbar.Header>
);

const Playground: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, flexDirection: "row", paddingTop: 8 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <NavigatorList />
        </View>
        <VLine />
        <View style={{ flex: 1, padding: 16 }}>
          <InspectorContainer />
        </View>
        <VLine />
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <Preview />
        </View>
      </View>
    </View>
  );
};

export default Playground;
