import React from "react";
import { IconButton } from "react-native-paper";
import { View } from "react-native";

export type PreviewPanel = "UI" | "Code";

interface Props {
  preview: PreviewPanel;
  setPreview(preview: PreviewPanel);
}

const PreviewSwitch: React.FC<Props> = ({ preview, setPreview }) => {
  const showCode = preview === "Code";

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <IconButton
        icon={"cellphone"}
        onPress={() => setPreview("UI")}
        color={showCode ? "grey" : "black"}
      />
      <IconButton
        icon={"file-code"}
        onPress={() => setPreview("Code")}
        color={!showCode ? "grey" : "black"}
      />
    </View>
  );
};

export default PreviewSwitch;
