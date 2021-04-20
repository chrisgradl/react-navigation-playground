import { useAppSelector } from "../redux/store";
import { View } from "react-native";
import Smartphone from "./Smartphone";
import ErrorBoundary from "./ErrorBoundary";
import PlaygroundRenderer from "./renderer/PlaygroundRenderer";
import React from "react";

export default function LivePreview() {
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
}
