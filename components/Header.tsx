import React, { useRef, useState } from "react";
import { Appbar, Menu } from "react-native-paper";
import ExportToSnack from "./ExportToSnack";

const Header = () => {
  const anchorRef = useRef();

  const [menu, showMenu] = useState(false);

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
        <Menu.Item title={"Template: Tabs"} />
        <Menu.Item title={"Template: Stack"} />
        <Menu.Item title={"Template: complex"} />
        <Menu.Item title={"Reset"} />
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
