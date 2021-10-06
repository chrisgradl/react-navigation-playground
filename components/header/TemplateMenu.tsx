import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import {
  loadDrawerTemplate,
  loadTabsTemplate,
  resetState,
} from "../../redux/LoadProjectAction";
import { useAppDispatch } from "../../redux/types";

interface Props {}

const TemplateMenu: React.FC<Props> = () => {
  const [menu, showMenu] = useState(false);

  const dispatch = useAppDispatch();
  return (
    <Menu
      anchor={
        <Appbar.Action
          color={"white"}
          icon="menu"
          onPress={() => showMenu(true)}
        />
      }
      onDismiss={() => showMenu(false)}
      visible={menu}
    >
      <Menu.Item
        title={"Template: Tabs"}
        onPress={() => {
          dispatch(loadTabsTemplate());
          showMenu(false);
        }}
      />
      <Menu.Item
        title={"Template: Drawer"}
        onPress={() => {
          dispatch(loadDrawerTemplate());
          showMenu(false);
        }}
      />
      <Menu.Item
        title={"Template: Empty"}
        onPress={() => {
          dispatch(resetState());
          showMenu(false);
        }}
      />
    </Menu>
  );
};

export default TemplateMenu;
