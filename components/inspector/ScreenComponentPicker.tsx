import React from "react";
import {
  ComponentType,
  PlaygroundNavigatorType,
  PlaygroundScreen,
} from "../../types";
import { RadioButton, Subheading } from "react-native-paper";
import InspectorItem from "./InspectorItem";
import { Picker, View } from "react-native";

const ScreenComponentPicker: React.FC<{
  onChange(type: Partial<PlaygroundScreen>): void;
  screen: PlaygroundScreen;
  navigators;
}> = ({ screen, onChange, navigators }) => {
  return (
    <InspectorItem style={{ padding: 16 }}>
      <Subheading>Component</Subheading>
      <RadioButton.Group
        onValueChange={(value) =>
          onChange({
            component: {
              type: value as ComponentType,
              navigatorId: undefined,
            },
          })
        }
        value={screen.component.type}
      >
        {Object.values(ComponentType).map((c) => (
          <RadioButton.Item key={c} value={c} label={c} />
        ))}
      </RadioButton.Group>

      {screen.component.type === ComponentType.Navigator ? (
        <View style={{ paddingLeft: 14, paddingRight: 24 }}>
          <Picker
            style={{ fontFamily: "Inter", height: 30, borderColor: "black" }}
            selectedValue={screen.component.navigatorId}
            onValueChange={(value) =>
              onChange({
                component: {
                  navigatorId: value,
                  type: ComponentType.Navigator,
                },
              })
            }
          >
            <Picker.Item label={"Select a Navigator"} value={undefined} />
            {navigators.map((nav) => (
              <Picker.Item key={nav.id} label={nav.name} value={nav.id} />
            ))}
          </Picker>
        </View>
      ) : null}
    </InspectorItem>
  );
};

export default ScreenComponentPicker;
