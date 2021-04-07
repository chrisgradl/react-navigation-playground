import { StackNavigationOptions } from "@react-navigation/stack";
import {
  DefaultNavigatorOptions,
  DrawerRouterOptions,
  StackRouterOptions,
  TabRouterOptions,
} from "@react-navigation/native";
import { StackNavigationConfig } from "@react-navigation/stack/lib/typescript/src/types";
import {
  BottomTabNavigationConfig,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  DrawerNavigationConfig,
  DrawerNavigationOptions,
} from "@react-navigation/drawer/lib/typescript/src/types";

export enum PlaygroundNavigatorType {
  Stack = "Stack",
  Tab = "Tab",
  Drawer = "Drawer",
}

type StackNavigatorProps = Omit<
  DefaultNavigatorOptions<StackNavigationOptions> &
    StackRouterOptions &
    StackNavigationConfig,
  "children"
>;

type BottomTabNavigatorProps = Omit<
  DefaultNavigatorOptions<BottomTabNavigationOptions> &
    TabRouterOptions &
    BottomTabNavigationConfig,
  "children"
>;

type DrawerProps = Omit<
  DefaultNavigatorOptions<DrawerNavigationOptions> &
    DrawerRouterOptions &
    DrawerNavigationConfig,
  "children"
>;

export interface PlaygroundNavigator {
  id: string;
  type: PlaygroundNavigatorType;
  navigatorProps?: StackNavigatorProps | BottomTabNavigatorProps | DrawerProps;
  screens?: {
    [key: string]: PlaygroundScreen;
  };
  name: string;
}

export enum ComponentType {
  View = "View",
  Navigator = "Navigator",
}

export interface PlaygroundScreen {
  id: string;
  name: string;
  component: {
    type: ComponentType;
    navigatorId: string;
  };
  screenOptions?:
    | StackNavigationOptions
    | BottomTabNavigationOptions
    | DrawerNavigationOptions;
}

export interface PlaygroundState {
  rootId: string;
  navigators: {
    [key: string]: PlaygroundNavigator;
  };
}
