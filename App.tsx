import "react-native-gesture-handler";
import React from "react";
import PlaygroundRenderer from "./components/renderer/PlaygroundRenderer";

//does only work on the web
export default function App() {
  return <PlaygroundRenderer playgroundState={{} as any} />;
}
