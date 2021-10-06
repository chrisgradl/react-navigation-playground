import {
  HeaderIcon,
  NavigatorRecord,
  PlaygroundNavigatorType,
  PlaygroundScreen,
  PlaygroundState,
} from "../../types";
import { navState } from "./getCodeComponent";

export const SimplePage = `const SimplePage = () => <View><Text>Basic View</Text></View>`;

export const headerIconButton = `const HeaderIcon = (props) => {
  const {colors} = useTheme()
  const {text} = colors
  return (
      <IconButton
          color={text}
          {...props}
  />
)
}
`;

const importLinesForNavigators: Record<PlaygroundNavigatorType, string> = {
  Stack: 'import { createStackNavigator } from "@react-navigation/stack";',
  Tab:
    'import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";',
  Drawer: 'import { createDrawerNavigator } from "@react-navigation/drawer";',
};

export function createImports(state: PlaygroundState) {
  const allTypes = Object.values(state.navigators).map((value) => value.type);
  const types = Array.from(new Set(allTypes));

  return `import React from "react";
  import {View, Text} from "react-native";
  import {IconButton} from "react-native-paper";
  import { NavigationContainer, useTheme } from "@react-navigation/native";
  import { SafeAreaProvider } from "react-native-safe-area-context";
  import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
  ${types.map((type) => importLinesForNavigators[type]).join("\n")}
  `;
}

export const createNavigatorConst = (name, type) => {
  switch (type) {
    case PlaygroundNavigatorType.Stack:
      return `const ${name} = createStackNavigator();`;
    case PlaygroundNavigatorType.Tab:
      return `const ${name} = createBottomTabNavigator();`;
    case PlaygroundNavigatorType.Drawer:
      return `const ${name} = createDrawerNavigator();`;
  }
};
export const createHeaderIconComponent = ({
  icon,
  payload,
  action,
}: HeaderIcon) =>
  `() =>  
<HeaderIcon 
    icon={"${icon}"} 
    onPress={() => {${
      action === "toggleDrawer"
        ? "navigation.toggleDrawer();"
        : `navigation.navigate("${payload}");`
    }}}
/>`;

export function getEditorSpecificNavigationContainerProps() {
  return `initialState={${JSON.stringify(
    navState
  )}} onStateChange={onNavigationStateChanged} documentTitle={{enabled: false}}`;
}

export const getScreenOptions = ({
  headerShown,
  headerLeft,
  headerRight,
  tabbarIcon,
}: PlaygroundScreen) => {
  return `options={({navigation}) => ({
        ${
          tabbarIcon?.icon
            ? `tabBarIcon: (props) => <Icon {...props} name={"${tabbarIcon.icon}"} />,`
            : ""
        }
        headerShown: ${Boolean(headerShown)}, 
        ${
          headerLeft
            ? "headerLeft:" + createHeaderIconComponent(headerLeft) + ","
            : ""
        }
        ${
          headerRight
            ? "headerRight:" + createHeaderIconComponent(headerRight) + ","
            : ""
        }
      })}`;
};
export const createNavigatorScreenComponent = ({
  navigatorName,
  name,
  component,
  options,
}) =>
  `<${navigatorName}.Screen name="${name}" component={${component}} ${options} />`;

const getScreenComponent = (
  { component }: PlaygroundScreen,
  navigators: NavigatorRecord
) => {
  const navigator = navigators[component.navigatorId];
  if (component.type === "Navigator" && navigator) {
    return navigators[component.navigatorId].name + "Component";
  }
  return "SimplePage";
};

export function createChildrenScreens(
  screens: Record<string, PlaygroundScreen>,
  navigatorName: string,
  navigators: NavigatorRecord
) {
  const children = Object.values(screens)
    .map((screen) =>
      createNavigatorScreenComponent({
        navigatorName,
        name: screen.name,
        component: getScreenComponent(screen, navigators),
        options: getScreenOptions(screen),
      })
    )
    .join("\n");
  return children;
}
