import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { usePlaygroundState } from "../../hooks/usePlaygroundState";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ScreenView from "./ScreenView";

import { PlaygroundNavigatorType } from "../../types";

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
}

const PlaygroundNavigator: React.FC<Props> = ({ id}) => {
  const { navigators } = usePlaygroundState();

  const navigator = navigators[id];

  if (!navigator) {
    return <Text>Could not find navigator with id {id}</Text>;
  }

  const { type, screens } = navigator;

  const Navigation = createNavigatorByType(type);

  return (
    <Navigation.Navigator>
      {Object.values(screens).map((screen) => {
        const { component, name, id: screenId } = screen;
        return (
          <React.Fragment key={id}>
            {/*
              // @ts-ignore */}
            <Navigation.Screen
              key={"screenId" + screenId}
              name={name}
            >
              {(props: any) =>
                component.type === "Navigator" ? (
                  <PlaygroundNavigator {...props} id={component.navigatorId} />
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
