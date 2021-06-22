import { View } from "react-native";
import Smartphone from "./Smartphone";
import ErrorBoundary from "./ErrorBoundary";
import React from "react";
import { navigationRef } from "./debug/DebugInspector";
import PlaygroundRenderer from "./renderer/PlaygroundRenderer";


export default function LivePreview({ project }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Smartphone>
        <ErrorBoundary>
          {project ? (
            <PlaygroundRenderer playgroundState={project} ref={navigationRef} />
          ) : null}
        </ErrorBoundary>
      </Smartphone>
    </View>
  );
}
