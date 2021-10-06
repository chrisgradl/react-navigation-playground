import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { HeaderIcon } from "../../types";
import InspectorItem from "./InspectorItem";
import { Button, Subheading } from "react-native-paper";
import IconPicker from "../misc/IconPicker";

interface Props {
  icon: string;
  onValueChange(value: string): void;
}

const TabIconPicker: React.FC<Props> = ({ icon, onValueChange }) => {
  return (
    <InspectorItem  style={{ paddingHorizontal: 16, paddingVertical: 6}}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Subheading  numberOfLines={1}>Tab Icon</Subheading>
        <IconPicker
          value={icon}
          onSelect={onValueChange}
          renderButton={({ onPress }) => (
            <Button
              onPress={onPress}
              contentStyle={{ justifyContent: "flex-start" }}
              icon={icon}
            >
              {icon || "No Icon Selected"}
            </Button>
          )}
        />
      </TouchableOpacity>
    </InspectorItem>
  );
};

export default TabIconPicker;
