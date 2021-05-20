import React from "react";
import { PlaygroundState } from "../../types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import PlaygroundNavigator from "./PlaygroundNavigator";
import { Provider as PaperProvider } from "react-native-paper";

interface Props {
  playgroundState: PlaygroundState;
}

//the component should work by only passing in the state, keep it free from redux
const PlaygroundRenderer: React.FC<Props> = ({ playgroundState }) => {
  const { rootId, theme, navigators } = playgroundState;

  //we initialy had a Provider to get the playground state, but prop passing is working
  return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <PlaygroundNavigator id={rootId} navigators={navigators} />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
  );
};

export default PlaygroundRenderer;
