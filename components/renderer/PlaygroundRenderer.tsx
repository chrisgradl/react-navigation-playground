import React from "react";
import { PlaygroundState } from "../../types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { PlaygroundProvider } from "../../hooks/usePlaygroundState";
import PlaygroundNavigator from "./PlaygroundNavigator";
import { Provider as PaperProvider } from "react-native-paper";

interface Props {
  playgroundState: PlaygroundState;
}

const PlaygroundRenderer: React.FC<Props> = ({ playgroundState }) => {
  const { rootId, theme } = playgroundState;

  return (
    <PlaygroundProvider state={playgroundState}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <PlaygroundNavigator id={rootId} />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </PlaygroundProvider>
  );
};

export default PlaygroundRenderer;
