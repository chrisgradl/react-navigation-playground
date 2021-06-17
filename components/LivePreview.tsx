import { useAppSelector } from "../redux/store";
import { View } from "react-native";
import Smartphone from "./Smartphone";
import ErrorBoundary from "./ErrorBoundary";
import React from "react";

import dynamic from "next/dynamic";

const PlaygroundRenderer = dynamic(
  () => import("./renderer/PlaygroundRenderer"),
  { ssr: false }
);

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
          <PlaygroundRenderer playgroundState={project} />
        </ErrorBoundary>
      </Smartphone>
    </View>
  );
}
