const StackNavigationOptionsForms = {
  title: "string",
  headerStyle: {
    backgroundColor: "string",
  },
  headerShown: "boolean",
};

export enum PropsFormItemType {
  string = "string",
  boolean = "boolean",
  picker = "picker",
}

export interface PropsFormItem {
  name: string;
  type: PropsFormItemType;
  options?: string[];
  defaultValue?: any;
}

export interface PropsForm {
  [propName: string]: PropsFormItem;
}

const StackNavigationProps: PropsForm = {
  initialRouteName: {
    name: "initialRouteName",
    type: PropsFormItemType.string,
  },
  keyboardHandlingEnabled: {
    name: "keyboardHandlingEnabled",
    type: PropsFormItemType.boolean,
  },
  mode: {
    name: "mode",
    type: PropsFormItemType.picker,
    options: ["card", "modal"],
  },
  headerMode: {
    name: "headerMode",
    type: PropsFormItemType.picker,
    options: ["float", "screen", "none"],
  },
};

export { StackNavigationProps };
