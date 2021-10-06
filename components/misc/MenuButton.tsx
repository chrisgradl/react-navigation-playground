import React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import SectionContainer from "../sidebar/SectionContainer";

interface Props {
  title: string;
  selected: boolean;
  icon?: string;
  onPress();
}

const MenuButton: React.FC<Props> = ({ selected, onPress, icon, title }) => {
  return (
    <SectionContainer selected={selected}>
      <List.Item
        titleStyle={
          selected && { color: "rgb(0, 122, 255)", fontWeight: "bold" }
        }
        title={title}
        onPress={onPress}
        right={() => (
          <List.Icon icon={icon} color={selected && "rgb(0, 122, 255)"} />
        )}
      />
    </SectionContainer>
  );
};

export default MenuButton;
