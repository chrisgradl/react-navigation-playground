import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { usePlaygroundState } from "../../hooks/usePlaygroundState";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ScreenView from "./ScreenView";

import { PlaygroundNavigatorType } from "../../types";
import { IconButton } from "react-native-paper";

const createNavigatorByType = (type: PlaygroundNavigatorType) => {
  switch (type) {
    case PlaygroundNavigatorType.Stack:
      return createStackNavigator();
      break;
    case PlaygroundNavigatorType.Tab:
      return createBottomTabNavigator();
      break;
    case PlaygroundNavigatorType.Drawer:
      return createDrawerNavigator();
      break;
  }
};

interface Props {
  id: string;
  parentIsDrawer?: boolean;
}

const PlaygroundNavigator: React.FC<Props> = ({ id, parentIsDrawer }) => {
  const { navigators } = usePlaygroundState();

  const navigator = navigators[id];

  if (!navigator) {
    return <Text>Could not find navigator with id {id}</Text>;
  }

  const { type, screens } = navigator;

  const Navigation = createNavigatorByType(type);

  return (
    <Navigation.Navigator key={id}>
      {Object.values(screens).map((screen) => {
        const { component, name, id: screenId } = screen;
        return (
          <React.Fragment key={id}>
            {/*
              // @ts-ignore */}
            <Navigation.Screen
              options={({ navigation }) => ({
                headerLeft: (props) =>
                  parentIsDrawer ? (
                    <IconButton
                      icon={"menu"}
                      onPress={() => navigation?.toggleDrawer()}
                    />
                  ) : null,
              })}
              key={"screenId" + screenId}
              name={name}
            >
              {(props: any) =>
                component.type === "Navigator" ? (
                  <PlaygroundNavigator
                    key={component.navigatorId}
                    {...props}
                    id={component.navigatorId}
                    parentIsDrawer={type === PlaygroundNavigatorType.Drawer}
                  />
                ) : (
                  <ScreenView {...props} parentNavigatorId={id} />
                )
              }
            </Navigation.Screen>
          </React.Fragment>
        );
      })}
    </Navigation.Navigator>
  );

  return (
    <View>
      <Text>Navigator Type not allowed</Text>
    </View>
  );
};

export default PlaygroundNavigator;
