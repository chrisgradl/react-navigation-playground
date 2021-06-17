import React from "react";
import { View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import InspectorItem, { InspectorItemSpace } from "../inspector/InspectorItem";
import ThemeSwitch from "../ThemeSwitch";
import { setThemeColor } from "../../redux/ThemeReducer";
import TextWithEditFunction from "../TextWithEditFunction";
import { Caption, Checkbox, Title } from "react-native-paper";
import Color from "color";

interface Props {}

const ThemeInspector: React.FC<Props> = () => {
  const { colors, dark } = useAppSelector((state) => state.theme);
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
        <React.Fragment key={key}>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <View style={{ flex: 1 }}>
              <TextWithEditFunction
                label={key}
                value={colors[key]}
                validationText={"Not a valid Color"}
                validation={(text) => {
                  try {
                    Color(text);
                    return true;
                  } catch (e) {
                    return false;
                  }
                  return false;
                }}
                onValueChangeSubmit={(value) =>
                  dispatch(setThemeColor({ key, value }))
                }
              />
              <Caption style={{ color: "black" }}>{description}</Caption>
            </View>
            <View
              style={{
                marginTop: 8,
                backgroundColor: colors[key],
                width: 40,
                height: 40,
                marginLeft: 8,
                borderRadius: 20,
              }}
            />
          </View>
          <InspectorItemSpace />
          <InspectorItemSpace />
        </React.Fragment>
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
