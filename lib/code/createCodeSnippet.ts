import {PlaygroundState,} from "../../types";
import {createAppComponent, createImports, createNavigators, HeaderIconButton, SimplePage,} from "./CodeUtil";
import {formatCode} from "./formatCode";

function createStructure({
  imports,
  SimplePage,
  HeaderIconButton,
  theme,
  navigators,
  App,
}) {
  return `
  ${imports}
  
  ${SimplePage}
  
  ${HeaderIconButton}
  
  ${theme}
 
  ${navigators}
  
  ${App}
  `;
}

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
  const snippet = createStructure({
    imports: createImports(state),
    theme: `const theme = ${JSON.stringify(theme)}`,
    SimplePage,
    HeaderIconButton,
    navigators: createNavigators(navigators),
    App,
  });

  return formatCode(snippet);
}
