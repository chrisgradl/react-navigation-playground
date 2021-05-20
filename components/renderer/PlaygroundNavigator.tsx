import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ScreenView from "./ScreenView";
import { NavigatorRecord, PlaygroundNavigatorType } from "../../types";
import { IconButton, Subheading } from "react-native-paper";

const createNavigatorByType = (type: PlaygroundNavigatorType) => {
  switch (type) {
    case PlaygroundNavigatorType.Stack:
      return createStackNavigator();
    case PlaygroundNavigatorType.Tab:
      return createBottomTabNavigator();
    case PlaygroundNavigatorType.Drawer:
      return createDrawerNavigator();
  }
};

interface Props {
  id: string;
  navigators: NavigatorRecord;
}

const PlaygroundNavigator: React.FC<Props> = ({ id, navigators }) => {
  const navigator = navigators[id];

  if (!navigator) {
    return <Subheading>Could not find a navigator</Subheading>;
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
              options={({ navigation }) => {
                if (type === PlaygroundNavigatorType.Stack) {
                  const options: StackNavigationOptions = {
                    headerShown: screen.headerShown,
                  };
                  if (screen.headerRight) {
                    options.headerRight = () => (
                      <IconButton
                        icon={screen.headerRight.icon}
                        onPress={() => {
                          const { payload, action } = screen.headerRight;
                          if (action === "toggleDrawer") {
                            navigation.toggleDrawer();
                          } else if (payload) {
                            navigation.navigate(payload);
                          }
                        }}
                      />
                    );
                  }
                  if (screen.headerLeft) {
                    options.headerLeft = () => (
                      <IconButton
                        icon={screen.headerLeft.icon}
                        onPress={() => {
                          const { payload, action } = screen.headerLeft;
                          if (action === "toggleDrawer") {
                            navigation.toggleDrawer();
                          } else if (payload) {
                            navigation.navigate(payload);
                          }
                        }}
                      />
                    );
                  }
                  return options;
                }
              }}
              key={"screenId" + screenId}
              name={name}
            >
              {(props: any) =>
                component.type === "Navigator" ? (
                  <PlaygroundNavigator
                    {...props}
                    key={component.navigatorId}
                    id={component.navigatorId}
                    navigators={navigators}
                  />
                ) : (
                  <ScreenView {...props} navigators={navigators} />
                )
              }
            </Navigation.Screen>
          </React.Fragment>
        );
      })}
    </Navigation.Navigator>
  );
};

export default PlaygroundNavigator;
