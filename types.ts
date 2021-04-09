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

export interface PlaygroundScreen {
  id: string;
  name: string;
  component: {
    type: ComponentType;
    navigatorId: string;
  };
  /*screenOptions?:
    | StackNavigationOptions
    | BottomTabNavigationOptions
    | DrawerNavigationOptions;*/
}

export type NavigatorRecord = Record<string, PlaygroundNavigator>;

export interface PlaygroundState {
  rootId: string;
  navigators: NavigatorRecord;
}
