import React from "react";
import { View, ViewStyle } from "react-native";
import { RadioButton, Subheading } from "react-native-paper";
import { PlaygroundNavigatorType } from "../../types";

interface Props {
  style?: ViewStyle;
}

const InspectorItem: React.FC<Props> = ({ style, children }) => {
  return (
    <View
      style={[{ borderColor: "grey", borderWidth: 1, borderRadius: 6 }, style]}
    >
      {children}
    </View>
  );
};

const InspectorItemSpace = () => <View style={{ height: 16 }} />;

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

export default InspectorItem;

export { InspectorItemSpace, NavigationTypeItem };
