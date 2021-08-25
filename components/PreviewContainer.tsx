import React from "react";
import { ScrollView, View } from "react-native";
import PreviewSwitch, { PreviewPanel } from "./PreviewSwitch";
import CodePanel from "./CodePanel";
import { LivePreviewWrapper } from "./Playground";

const PreviewContainer = () => {
  const [preview, setPreview] = React.useState<PreviewPanel>("UI");

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 32,
        }}
      >
        {preview === "Code" ? <CodePanel /> : <LivePreviewWrapper />}
      </ScrollView>
      <View
        style={{
          height: 38,
          backgroundColor: "lightgrey",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <PreviewSwitch preview={preview} setPreview={setPreview} />
      </View>
    </>
  );
};

export default PreviewContainer;
