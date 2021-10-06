import React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";

interface Props {
  title: string;
  selected: boolean;
  icon?: string;
  onPress();
}

const MenuButton: React.FC<Props> = ({ selected, onPress, icon, title }) => {
  return (
    <View
      style={{
        borderRadius: 8,
        backgroundColor: selected
          ? "rgba(0, 122, 255, 0.2)"
          : "rgba(0, 122, 255, 0.1)",
        marginBottom: 16,
      }}
    >
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
    </View>
  );
};

export default MenuButton;
