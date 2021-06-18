import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectTheme, setTheme } from "../../redux/ThemeReducer";
import { IconButton, Menu, Subheading, Switch } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";

const ThemeTemplateDropdown: React.FC = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const setNewTheme = (theme) => {
    dispatch(setTheme(theme));
    closeMenu();
  };

  return (
    <Menu
      onDismiss={closeMenu}
      visible={visible}
      anchor={
        <TouchableOpacity
          onPress={openMenu}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 16,
            paddingRight: 10,
          }}
        >
          <Subheading style={{ flex: 1 }}>Load Theme</Subheading>
          <IconButton onPress={openMenu} size={24} icon={"arrow-down-drop-circle-outline"} />
        </TouchableOpacity>
      }
    >
      <Menu.Item
        icon={"brightness-2"}
        onPress={() => setNewTheme("default")}
        title="Default"
      />
      <Menu.Item
        icon={"brightness-7"}
        onPress={() => setNewTheme("dark")}
        title="Dark"
      />
      <Menu.Item icon={"pizza"} onPress={() => setNewTheme("margherita")} title="Margherita" />
    </Menu>
  );
};

export default ThemeTemplateDropdown;
