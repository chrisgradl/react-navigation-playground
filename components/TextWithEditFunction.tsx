import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
  value: string;
  label?: string;
  containerStyle?: ViewStyle;
  onValueChangeSubmit(value: string);
}

const TextWithEditFunction: React.FC<Props> = ({
  onValueChangeSubmit,
  value,
  label,
  containerStyle = {},
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [text, setText] = useState(value);

  const divRef = useRef(undefined);
  const inputRef = useRef(undefined);

  useEffect(() => {
    if (showEdit === true) {
      inputRef?.current?.focus();
    }
  }, [showEdit]);

  if (showEdit) {
    return (
      <View
        style={[containerStyle, { flexDirection: "row", alignItems: "center" }]}
      >
        <div ref={divRef} style={{ display: "contents" }}>
          <TextInput
            ref={inputRef}
            label={label}
            style={{ flex: 1 }}
            onBlur={(e) => {
              if (!divRef.current.contains(e.relatedTarget)) {
                //only submit if no button inside the textinput is clicked
                onValueChangeSubmit(text);
                setShowEdit(false);
              } else {
                //check if tab key is pressed
              }
            }}
            blurOnSubmit={true}
            onSubmitEditing={() => {
              onValueChangeSubmit(text);
              setShowEdit(false);
            }}
            dense={true}
            mode={"outlined"}
            onChangeText={setText}
            value={text}
            right={
              <TextInput.Icon
                name={"close"}
                onPress={() => {
                  setText(value);
                  setShowEdit(false);
                }}
              />
            }
          />
        </div>
      </View>
    );
  }

  return (
    <View
      style={[containerStyle, { flexDirection: "row", alignItems: "center" }]}
    >
      <TouchableOpacity style={{ flex: 1 }} onPress={() => setShowEdit(true)}>
        <TextInput
          label={label}
          value={value}
          mode={"outlined"}
          dense={true}
          editable={false}
          right={
            <TextInput.Icon
              size={20}
              name={"pencil"}
              onPress={() => setShowEdit(true)}
            />
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default TextWithEditFunction;
