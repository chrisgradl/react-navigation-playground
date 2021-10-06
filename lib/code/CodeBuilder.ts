import {NavigatorRecord, PlaygroundNavigator, PlaygroundState,} from "../../types";
import {
  createChildrenScreens,
  createImports,
  createNavigatorConst,
  getEditorSpecificNavigationContainerProps,
  headerIconButton,
  SimplePage,
} from "./CodeBlocks";
import {formatCode} from "./formatCode";

function createAppComponent(children: string, expoExport?: boolean) {
  //the initial state is only inserted in the editor,  for the snack export it should not bet used
  const props = expoExport ? "" : getEditorSpecificNavigationContainerProps();
  return `
    export default function App() {
    return (
      <SafeAreaProvider>
          <NavigationContainer ${props} theme={theme}>
            ${children}
          </NavigationContainer>
      </SafeAreaProvider>
    );
  };`;
}

const createNavigator = (
  { name, type, screens, tabBarShowLabel }: PlaygroundNavigator,
  navigators: NavigatorRecord
) => {
  const navigatorName = name;
  const componentName = navigatorName + "Component";

  const children = createChildrenScreens(screens, navigatorName, navigators);

  const screenOptions =
    !tabBarShowLabel && type === "Tab"
      ? `screenOptions={{tabBarShowLabel: ${tabBarShowLabel}}}`
      : "";

  return `
    ${createNavigatorConst(navigatorName, type)}
    
    function ${componentName} () {
        return (
            <${navigatorName}.Navigator ${screenOptions} >
                ${children}
            </${navigatorName}.Navigator>
        )
    }
  `;
};

export default async function createCodeSnippet(
  state: PlaygroundState,
  expoExport?: boolean
) {
  const { navigators, rootId, theme } = state;

  const rootNavigatorComponentName = navigators[rootId].name + "Component";

  const App = createAppComponent(
    `<${rootNavigatorComponentName} />`,
    expoExport
  );

  const importStatements = createImports(state);

  const themeStatement = `const theme = ${JSON.stringify(theme)}`;

  const navigatorComponents = Object.values(navigators)
    .map((navigator) => createNavigator(navigator, navigators))
    .join("\n");

  const snippet = `
  ${importStatements}
  
  ${SimplePage}
  
  ${headerIconButton}
  
  ${themeStatement}
 
  ${navigatorComponents}
  
  ${App}
  `;

  return formatCode(snippet);
}
