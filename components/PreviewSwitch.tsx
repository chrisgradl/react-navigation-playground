import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { IconButton } from "react-native-paper";
import { View } from "react-native";
import { selectPreviewPanel, setPreview } from "../redux/PreviewReducer";

const PreviewSwitch: React.FC = () => {
  const dispatch = useAppDispatch();
  const preview = useAppSelector(selectPreviewPanel);

  const showCode = preview === "Code";

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <IconButton
        icon={"cellphone"}
        onPress={() => dispatch(setPreview("UI"))}
        color={showCode ? "grey" : "black"}
      />
      <IconButton
        icon={"file-code"}
        onPress={() => dispatch(setPreview("Code"))}
        color={!showCode ? "grey" : "black"}
      />
    </View>
  );
};

export default PreviewSwitch;
