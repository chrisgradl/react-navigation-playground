import React, { forwardRef } from "react";
import { PlaygroundState } from "../../types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import PlaygroundNavigator from "./PlaygroundNavigator";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainerRef } from "@react-navigation/core";

interface Props {
  playgroundState: PlaygroundState;
}

const PlaygroundRenderer = forwardRef<NavigationContainerRef, Props>(
  ({ playgroundState }, ref) => {
    const { rootId, theme, navigators } = playgroundState;

    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer ref={ref} theme={theme}>
            <PlaygroundNavigator id={rootId} navigators={navigators} />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
);

export default PlaygroundRenderer;
