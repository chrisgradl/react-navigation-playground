import React from "react";
import { View, ViewStyle } from "react-native";

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

export default InspectorItem;

export { InspectorItemSpace };
