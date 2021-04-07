import {
  ComponentType,
  PlaygroundNavigatorType,
  PlaygroundState,
} from "./types";

const basicState: PlaygroundState = {
  rootId: "1",
  navigators: {
    "1": {
      id: "1",
      name: "RootNavigator Tab",
      navigatorProps: {
        tabBarOptions: {
          activeTintColor: "blueviolet",
          tabStyle: {
            backgroundColor: "orange",
          },
        },
      },
      screens: {
        screen1: {
          component: {
            type: ComponentType.Navigator,
            navigatorId: "2",
          },
          name: "screen1",
          id: "screen1",

          screenOptions: {},
        },
        screen2: {
          component: {
            type: ComponentType.Navigator,
            navigatorId: "3",
          },
          name: "screen2",
          id: "screen2",

          screenOptions: {},
        },
      },
      type: PlaygroundNavigatorType.Tab,
    },
    "2": {
      name: "Stack 1 in Tab",
      id: "2",
      type: PlaygroundNavigatorType.Stack,
      screens: {
        "4": {
          component: {
            type: ComponentType.View,
            navigatorId: undefined,
          },
          name: "screen4",
          id: "4",
          screenOptions: {
            title: "Hello 1",
          },
        },
      },
    },
    "3": {
      name: "Stack 2 in Tab",
      id: "3",
      type: PlaygroundNavigatorType.Stack,
      screens: {
        "5": {
          component: {
            type: ComponentType.View,
            navigatorId: undefined,
          },
          name: "screen5",
          id: "5",
          screenOptions: {
            title: "Hello 2",
          },
        },
      },
    },
  },
};

export { basicState };
