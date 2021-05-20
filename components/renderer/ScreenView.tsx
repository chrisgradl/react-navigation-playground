import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { Button, List } from "react-native-paper";
import { NavigatorRecord, PlaygroundScreen } from "../../types";

const ScreenView: React.FC<{
  navigation: any;
  navigators: NavigatorRecord;
}> = ({ navigation, navigators }) => {
  const screens = Object.values(navigators).reduce((prevvalue, currValue) => {
    const screens = Object.values(currValue.screens);
    return [...prevvalue, ...screens];
  }, [] as PlaygroundScreen[]);

  const list = Object.values(screens);

  return (
    <ScrollView style={{ padding: 16 }}>
      <Button
        mode={"contained"}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        Toggle Drawer
      </Button>

      {list.map((screen) => (
        <List.Item
          key={"buttonId" + screen.id}
          onPress={() => navigation.navigate(screen.name)}
          title={"Navigate to:" + screen.name}
        />
      ))}
    </ScrollView>
  );
};

export default ScreenView;
