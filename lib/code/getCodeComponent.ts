import * as babel from "@babel/standalone";


// code is almost exactly reused from https://github.com/cawfree/react-native-wormhole

const globalName = "__WORMHOLE__";


//we store the navigation state of the generated preview in this variable
//the navState is used in the CodeSnippet to set the initial state of the navigation container to persist the current state when the Component is refreshed
let navState = null;

const defaultGlobal = Object.freeze({
  require: (moduleId: string) => {
    if (moduleId === "react") {
      return require("react");
    } else if (moduleId === "react-native") {
      return require("react-native");
    } else if (moduleId === "react-native-paper") {
      return require("react-native-paper");
    } else if (moduleId === "@react-navigation/native") {
      return require("@react-navigation/native");
    } else if (moduleId === "react-native-safe-area-context") {
      return require("react-native-safe-area-context");
    } else if (moduleId === "@react-navigation/drawer") {
      return require("@react-navigation/drawer");
    } else if (moduleId === "@react-navigation/stack") {
      return require("@react-navigation/stack");
    } else if (moduleId === "@react-navigation/bottom-tabs") {
      return require("@react-navigation/bottom-tabs");
    } else if (moduleId === "@expo/vector-icons") {
      return require("@expo/vector-icons");
    }
    return null;
  },
  onNavigationStateChanged: (state) => {
    navState = state
  },
});

export default async function getCodeComponent(input: string) {
  const src = babel.transform(input, { presets: ["env", "react"] }).code;
  const srcWithImports = `${Object.keys(defaultGlobal)
      .map((key) => `var ${key} = ${globalName}.${key};`)
      .join("\n")}; const exports = {}; ${src}; return exports.default;`

  const Component = await new Function(
    globalName,
    srcWithImports
  )(defaultGlobal);
  if (typeof Component !== "function") {
    throw new Error(
      `Expected function, encountered ${typeof Component}. Did you forget to mark your Wormhole as a default export?`
    );
  }
  return Component;
}

export {navState}
