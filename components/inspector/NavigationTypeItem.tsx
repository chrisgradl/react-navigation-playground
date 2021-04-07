import React from "react";
import { PlaygroundNavigatorType } from "../../types";
import { RadioButton, Subheading } from "react-native-paper";
import InspectorItem from "./InspectorItem";

const NavigationTypeItem: React.FC<{
  onChange(type: PlaygroundNavigatorType): void;
  value: PlaygroundNavigatorType;
}> = ({ value, onChange }) => {
  return (
    <InspectorItem style={{ padding: 8 }}>
      <Subheading>Navigator Type</Subheading>
      <RadioButton.Group value={value} onValueChange={onChange as any}>
        {Object.values(PlaygroundNavigatorType).map((item) => (
          <RadioButton.Item value={item} label={item} key={item} />
        ))}
      </RadioButton.Group>
    </InspectorItem>
  );
};

export default NavigationTypeItem;
