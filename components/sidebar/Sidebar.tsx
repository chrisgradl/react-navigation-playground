import React from "react";
import { ScrollView } from "react-native";
import AddNewNavigator from "./AddNewNavigator";
import ThemeButton from "./ThemeButton";
import NavigatorList from "./NavigatorList";

const Sidebar: React.FC = () => {
  return (
    <>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 16 }}
      >
        <ThemeButton />
        <NavigatorList />
        <AddNewNavigator />
      </ScrollView>
    </>
  );
};

export default Sidebar;
