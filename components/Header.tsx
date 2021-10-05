import React, { useState } from "react";
import { Appbar, Button, Menu } from "react-native-paper";
import ExportToSnack from "./ExportToSnack";
import {
  loadDrawerTemplate,
  loadTabsTemplate,
  resetState,
} from "../redux/LoadProjectAction";
import CreateProjectButton from "./CreateProjectButton";
import {useRouter} from "next/router"; import {useAppDispatch} from "../redux/types";

const Header = () => {
  const [menu, showMenu] = useState(false);

  const dispatch = useAppDispatch();

  const router = useRouter()

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

      <Button color={"white"} onPress={() => router.push("/feed")}>
        Feed
      </Button>

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
