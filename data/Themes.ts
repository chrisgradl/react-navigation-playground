import {
  DefaultTheme as TemplateDefaultTheme,
  Theme,
  DarkTheme as TemplateDarkTheme,
} from "@react-navigation/native";

const Margherita: Theme = {
  ...TemplateDefaultTheme,
  colors: {
    ...TemplateDefaultTheme.colors,
    primary: "black",
    background: "tomato",
    text: "black",
    notification: "rgb(255, 59, 48)",
    card: "yellow",
  },
};

export { TemplateDefaultTheme, TemplateDarkTheme, Margherita };
