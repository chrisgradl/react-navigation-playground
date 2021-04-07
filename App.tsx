import "react-native-gesture-handler";
import React from "react";
import PlaygroundRenderer from "./components/renderer/PlaygroundRenderer";
import { basicState } from "./BaseState";

export default function App() {
  return <PlaygroundRenderer playgroundState={basicState} />;
}
