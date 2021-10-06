import React from "react";
import { View } from "react-native";
import TextWithEditFunction from "../misc/TextWithEditFunction";
import { Caption } from "react-native-paper";
import { InspectorItemSpace } from "../inspector/InspectorItem";
import Color from "color";

function isColorString(text) {
  try {
    Color(text);
    return true;
  } catch (e) {
    return false;
  }
  return false;
}

export function ColorItem({
  value,
  description,
  label,
  onValueChangeSubmit,
}: {
  label: string;
  value: string;
  onValueChangeSubmit: (value: string) => void;
  description: string;
}) {
  return (
    <React.Fragment>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <View style={{ flex: 1 }}>
          <TextWithEditFunction
            label={label}
            value={value}
            validationText={"Not a valid Color"}
            validation={isColorString}
            onValueChangeSubmit={onValueChangeSubmit}
          />
          <Caption style={{ color: "black" }}>{description}</Caption>
        </View>
        <View
          style={{
            marginTop: 8,
            backgroundColor: value,
            width: 40,
            height: 40,
            marginLeft: 8,
            borderRadius: 20,
          }}
        />
      </View>
      <InspectorItemSpace />
      <InspectorItemSpace />
    </React.Fragment>
  );
}
