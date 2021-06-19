import React, { forwardRef, useRef, useState } from "react";
import { Appbar, Menu } from "react-native-paper";
import ExportToSnack from "./ExportToSnack";
import { useAppDispatch } from "../redux/store";
import {
  loadDrawerTemplate,
  loadTabsTemplate,
  resetState,
} from "../redux/LoadProjectAction";
import CreateProjectButton from "./CreateProjectButton";

const Header = () => {

  const [menu, showMenu] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <Appbar.Header>
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

      <Appbar.Content title="React-Navigation Playground" />
        <CreateProjectButton />
      <ExportToSnack />
      <Appbar.Action
        icon="github"
        onPress={() =>
          window.open(
            "https://github.com/chrisgradl/react-navigation-playground"
          )
        }
      />
    </Appbar.Header>
  );
};
export default Header;
