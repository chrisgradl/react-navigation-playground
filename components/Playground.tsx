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

const Playground: React.FC<Props> = () => {
  const playgroundState = useAppSelector((state) => state);

  const inspector = useAppSelector((state) => state.inspector);

  return (
    <View style={{ flex: 1 }}>
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
      <View style={{ flex: 1, flexDirection: "row", paddingTop: 8 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <NavigatorList />
        </View>
        <VLine />
        <View style={{ flex: 1, padding: 16 }}>
          {inspector.type === "Navigator" && <Inspector />}
          {inspector.type === "Screen" && <ScreenInspector />}
        </View>
        <VLine />
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <Smartphone>
            <ErrorBoundary>
              <PlaygroundRenderer playgroundState={playgroundState} />
            </ErrorBoundary>
          </Smartphone>
        </View>
      </View>
    </View>
  );
};

export default Playground;
