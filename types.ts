import { CombinedDarkTheme, CombinedDefaultTheme } from "./Themes";

export enum PlaygroundNavigatorType {
  Stack = "Stack",
  Tab = "Tab",
  Drawer = "Drawer",
}

export interface PlaygroundNavigator {
  id: string;
  type: PlaygroundNavigatorType;
  //navigatorProps?: StackNavigatorProps | BottomTabNavigatorProps | DrawerProps;
  screens?: Record<string, PlaygroundScreen>;
  name: string;
}

export enum ComponentType {
  View = "View",
  Navigator = "Navigator",
}

export interface HeaderIcon {
  icon: string;
  action: "toggleDrawer" | "navigate";
  payload?: any;
}

export interface PlaygroundScreen {
  id: string;
  name: string;
  component: {
    type: ComponentType;
    navigatorId: string;
  };
  headerRight?: HeaderIcon;
  headerLeft?: HeaderIcon;
  headerShown?: boolean;
  /*screenOptions?:
    | StackNavigationOptions
    | BottomTabNavigationOptions
    | DrawerNavigationOptions;*/
}

export type NavigatorRecord = Record<string, PlaygroundNavigator>;

export interface PlaygroundState {
  rootId: string;
  navigators: NavigatorRecord;
  theme: typeof CombinedDarkTheme | typeof CombinedDefaultTheme;
}
