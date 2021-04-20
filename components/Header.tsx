import React, { useRef, useState } from "react";
import { Appbar, Menu } from "react-native-paper";
import ExportToSnack from "./ExportToSnack";
import { useAppDispatch } from "../redux/store";
import {loadDrawerTemplate, loadTabsTemplate, resetState} from "../redux/LoadProjectAction";

const Header = () => {
  const anchorRef = useRef();

  const [menu, showMenu] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <Appbar.Header>
      <Menu
        anchor={
          <Appbar.Action
            color={"white"}
            ref={anchorRef}
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
          title={"Template: Stack"}
          onPress={() => {
            dispatch(loadDrawerTemplate());
            showMenu(false);
          }}
        />
        <Menu.Item
          title={"Reset"}
          onPress={() => {
            dispatch(resetState());
            showMenu(false);
          }}
        />
      </Menu>

      <Appbar.Content title="React-Navigation Playground" />
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
