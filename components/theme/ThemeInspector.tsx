import React from "react";
import {View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import InspectorItem, {InspectorItemSpace} from "../inspector/InspectorItem";
import ThemeSwitch from "../ThemeSwitch";
import {setThemeColor} from "../../redux/ThemeReducer";
import {Title} from "react-native-paper";
import {ColorItem} from "./ColorItem";


const ThemeInspector: React.FC = () => {
  const colors = useAppSelector((state) => state.theme.colors);
  const dispatch = useAppDispatch();

  return (
    <View>
      <InspectorItem>
        <ThemeSwitch />
      </InspectorItem>
      <InspectorItemSpace />
      <Title>Colors</Title>
      <InspectorItemSpace />
      {ThemeColors.map(({ description, name: key }) => (
        <ColorItem
          key={key}
          label={key}
          value={colors[key]}
          onValueChangeSubmit={(value) =>
            dispatch(setThemeColor({ key, value }))
          }
          description={description}
        />
      ))}
    </View>
  );
};

const ThemeColors = [
  {
    name: "primary",
    description:
      "The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.",
  },
  {
    name: "background",
    description:
      "The color of various backgrounds, such as background color for the screens.",
  },
  {
    name: "card",
    description:
      "The background color of card-like elements, such as headers, tab bars etc.",
  },
  {
    name: "text",
    description: "The text color of various elements.",
  },
  {
    name: "border",
    description:
      "The color of borders, e.g. header border, tab bar border etc.",
  },
  {
    name: "notification",
    description: "The color of Tab Navigator badge.",
  },
];

export default ThemeInspector;
