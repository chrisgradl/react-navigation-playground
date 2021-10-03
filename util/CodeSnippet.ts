import {
  HeaderIcon,
  NavigatorRecord,
  PlaygroundNavigator,
  PlaygroundNavigatorType,
  PlaygroundScreen,
  PlaygroundState,
} from "../types";
import { navState } from "./getCodeComponent";

const SimplePage =
  "const SimplePage = () => <View><Text>Basic View</Text></View>";

function createImports(state: PlaygroundState) {
  const allTypes = Object.values(state.navigators).map((value) => value.type);
  const types = Array.from(new Set(allTypes));

  const importLinesForNavigatos: Record<PlaygroundNavigatorType, string> = {
    Stack: 'import { createStackNavigator } from "@react-navigation/stack";',
    Tab:
      'import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";',
    Drawer: 'import { createDrawerNavigator } from "@react-navigation/drawer";',
  };

  return `import React from "react";
  import {View, Text} from "react-native";
  import {IconButton} from "react-native-paper";
  import { NavigationContainer, useTheme } from "@react-navigation/native";
  import { SafeAreaProvider } from "react-native-safe-area-context";
  ${types.map((type) => importLinesForNavigatos[type]).join("\n")}
  `;
}

const headerIconButton = `const HeaderIcon = (props) => {
  const {colors} = useTheme()

  const {text} = colors

  return (
      <IconButton
          color={text}
          {...props}
  />
)
}
`


function createRootNavigation(children: string, theme, expoExport?: boolean) {
  const initialState = !expoExport
    ? `initialState={${JSON.stringify(navState)}}`
    : "";
  const onNavigationStateChanged = !expoExport ? "onStateChange={onNavigationStateChanged}" : "";

  const documentTitle = !expoExport ? "documentTitle={{enabled: false}}" : "";

  return `
    ${headerIconButton}
    const theme = ${JSON.stringify(theme)}
    
    export default function App() {
    return (
      <SafeAreaProvider>
          <NavigationContainer ${documentTitle} ${initialState}  ${onNavigationStateChanged} theme={theme}>
            ${children}
          </NavigationContainer>
      </SafeAreaProvider>
    );
  };`;
}

const getNavigatorName = (name: string) => {
  return name;
};

const createNavigatorConst = (name, type) => {
  switch (type) {
    case PlaygroundNavigatorType.Stack:
      return `const ${name} = createStackNavigator();`;
    case PlaygroundNavigatorType.Tab:
      return `const ${name} = createBottomTabNavigator();`;
    case PlaygroundNavigatorType.Drawer:
      return `const ${name} = createDrawerNavigator();`;
  }
};

const createNavigator = (
  { name, type, screens }: PlaygroundNavigator,
  navigators: NavigatorRecord
) => {
  const navigatorName = getNavigatorName(name);
  const componentName = navigatorName + "Component";

  const getScreenComponent = ({ component }: PlaygroundScreen) => {
    if (component.type === "View") {
      return "SimplePage";
    } else {
      const navigator = navigators[component.navigatorId];
      if (!navigator) {
        return "SimplePage";
      }
      return (
        getNavigatorName(navigators[component.navigatorId].name) + "Component"
      );
    }
  };

  const createHeaderIconComponent = ({
    icon,
    payload,
    action,
  }: HeaderIcon) => `() =>  <HeaderIcon
                      icon={"${icon}"}
                      onPress={() => {
                          ${
                            action === "toggleDrawer"
                              ? "navigation.toggleDrawer();"
                              : `navigation.navigate("${payload}");`
                          }
                        
                      }}
                    />`;

  const getScreenOptions = ({
    headerShown,
    headerLeft,
    headerRight,
    tabbarIcon,
  }: PlaygroundScreen) => {
    return `options={({navigation}) => ({
        ${
          tabbarIcon?.icon
            ? `tabBarIcon: props => <HeaderIcon icon={"${tabbarIcon.icon}"}/>,`
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

  return `
    ${createNavigatorConst(navigatorName, type)}
    
    function ${componentName} () {
        return (
            <${navigatorName}.Navigator>
                ${Object.values(screens)
                  .map(
                    (screen) =>
                      `<${navigatorName}.Screen name="${
                        screen.name
                      }" component={${getScreenComponent(screen)}} 
                      ${getScreenOptions(screen)}  
/>`
                  )
                  .join("\n")}
            </${navigatorName}.Navigator>
        )
    }
  `;
};

export const formatCode = (code: string) => {
  return Promise.all([
    require("prettier/standalone"),
    require("prettier/parser-babel"),
  ]).then(([prettier, babylonParser]) =>
    prettier.format(code, {
      parser: "babel",
      plugins: [babylonParser],
      semi: true,
      singleQuote: true,
    })
  );
};

export default async function createCodeSnippet(
  state: PlaygroundState,
  expoExport?: boolean
) {
  const { navigators, rootId, theme } = state;

  const rootNavigatorComponentName =
    getNavigatorName(navigators[rootId].name) + "Component";

  const snippet = `
  ${createImports(state)}
  
  ${SimplePage}
  
  ${Object.values(navigators)
    .map((navigator) => createNavigator(navigator, navigators))
    .join("\n")}
  
  ${
    createRootNavigation(`<${rootNavigatorComponentName} />`, theme, expoExport)
  }
  `;

  return formatCode(snippet);
}
