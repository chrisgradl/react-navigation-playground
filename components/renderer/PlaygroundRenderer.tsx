import React from "react";
import { PlaygroundState } from "../../types";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { PlaygroundProvider } from "../../hooks/usePlaygroundState";
import PlaygroundNavigator from "./PlaygroundNavigator";

interface Props {
  playgroundState: PlaygroundState;
}

const PlaygroundRenderer: React.FC<Props> = ({ playgroundState }) => {
  const { rootId } = playgroundState;

  return (
    <PlaygroundProvider state={playgroundState}>
      <SafeAreaProvider>
        <NavigationContainer>
          <PlaygroundNavigator id={rootId} />
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    </PlaygroundProvider>
  );
};

export default PlaygroundRenderer;
