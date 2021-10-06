import {CombinedDarkTheme, CombinedDefaultTheme} from "./data/Themes";
import {RootState} from "./redux/types";

export enum PlaygroundNavigatorType {
  Stack = "Stack",
  Tab = "Tab",
  Drawer = "Drawer",
}

export interface PlaygroundNavigator {
  id: string;
  type: PlaygroundNavigatorType;
  screens?: Record<string, PlaygroundScreen>;
  name: string;
  tabBarShowLabel?: boolean;
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
  tabbarIcon?: HeaderIcon;

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

export interface Project {
  id: string;
  createdAt: number;
  title: string;
  payload: Omit<RootState, "_persist">;
}

export interface ProjectPost {
  title: string;
  payload: Omit<RootState, "_persist">;
}
