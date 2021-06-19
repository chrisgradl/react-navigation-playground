import { useAppSelector } from "../redux/store";
import { View } from "react-native";
import Smartphone from "./Smartphone";
import ErrorBoundary from "./ErrorBoundary";
import React from "react";
import { navigationRef } from "./debug/DebugInspector";
import PlaygroundRenderer from "./renderer/PlaygroundRenderer";

export function LivePreviewWrapper() {
  const playgroundState = useAppSelector((state) => state);

  return <LivePreview project={playgroundState} />;
}

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
