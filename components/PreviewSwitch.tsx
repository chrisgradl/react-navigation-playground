import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { IconButton, Switch } from "react-native-paper";
import { View } from "react-native";
import { selectPreviewPanel, setPreview } from "../redux/PreviewReducer";

const PreviewSwitch: React.FC = () => {
  const dispatch = useAppDispatch();
  const preview = useAppSelector(selectPreviewPanel);

  const showCode = preview === "Code";

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Switch
        value={showCode}
        onValueChange={(value) => dispatch(setPreview(value ? "Code" : "UI"))}
      />
      <IconButton color={"white"} icon={showCode ? "file-code" : "cellphone"} />
    </View>
  );
};

export default PreviewSwitch;
