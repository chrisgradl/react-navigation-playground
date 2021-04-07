import React from "react";
import { Subheading, TextInput } from "react-native-paper";
import { StackNavigationProps } from "../../constants/FormData";
import { View } from "react-native";

interface Props {
  onChange(propsForm: { [key: string]: any }): void;
  values: { [key: string]: any };
}

const StackNavigatorPropsForm: React.FC<Props> = ({
  onChange,
  values = {},
}) => {
  return (
    <View>
      <Subheading>Navigation Props</Subheading>

      {Object.values(StackNavigationProps).map(({ name, type }) => (
        <TextInput
          mode={"outlined"}
          dense={true}
          label={name}
          value={values[name]}
          onChangeText={(text) => onChange({ ...values, [name]: text })}
        />
      ))}
    </View>
  );
};

export default StackNavigatorPropsForm;
