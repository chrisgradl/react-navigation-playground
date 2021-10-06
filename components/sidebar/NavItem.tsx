import React from "react";
import { IconButton, List } from "react-native-paper";

const NavItem: React.FC<{
  selected: boolean;
  title: string;
  onPress(): void;
  onPressDelete?(): void;
}> = ({ onPress, selected, title, onPressDelete }) => (
  <List.Item
    titleStyle={selected && { color: "rgb(0, 122, 255)", fontWeight: "bold" }}
    title={title}
    onPress={onPress}
    right={() =>
      selected ? (
        <IconButton
          style={{ padding: 0 }}
          onPress={onPressDelete}
          icon={"delete"}
          size={18}
        />
      ) : (
        <IconButton
          color={"transparent"}
          style={{ padding: 0 }}
          icon={"delete"}
          size={18}
        />
      )
    }
  />
);

export default NavItem;
