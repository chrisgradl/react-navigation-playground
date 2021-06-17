import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View, ViewStyle, TextInput as TextInputRN } from "react-native";
import { Caption, TextInput } from "react-native-paper";

interface Props {
  value: string;
  label?: string;
  containerStyle?: ViewStyle;
  onValueChangeSubmit(value: string);
  validation?(text: string): boolean;
  validationText?: string;
}

const TextWithEditFunction: React.FC<Props> = ({
  onValueChangeSubmit,
  value,
  label,
  containerStyle = {},
  validation = () => true,
  validationText = "Input not allowed",
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [text, setText] = useState(value);
  const [error, setError] = useState(false);

  const divRef = useRef(undefined);
  const inputRef = useRef<TextInputRN>(undefined);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    if (showEdit === true) {
      inputRef?.current?.focus();
    }
  }, [showEdit]);

  useEffect(() => {
    if (error) {
      setError(false);
    }
  }, [text]);

  const onSubmit = (text) => {
    const isValid = validation(text);
    if (isValid) {
      onValueChangeSubmit(text);
      setShowEdit(false);
      setError(false);
      inputRef.current.blur();
    } else {
      setError(true);
    }
  };

  if (showEdit) {
    return (
      <View
        style={[containerStyle, { justifyContent: "center" }]}
      >
        <div ref={divRef} style={{ display: "contents" }}>
          <TextInput
            ref={inputRef}
            label={label}
            style={{ flex: 1 }}
            onBlur={(e) => {
              if (!divRef.current.contains(e.relatedTarget)) {
                //only submit if no button inside the textinput is clicked
                onSubmit(text);
              } else {
                //check if tab key is pressed
              }
            }}
            blurOnSubmit={false}
            onSubmitEditing={() => onSubmit(text)}
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
        {error && <Caption style={{ color: "red" }}>{validationText}</Caption>}
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
        {error && <Caption style={{ color: "red" }}>{validationText}</Caption>}
      </TouchableOpacity>
    </View>
  );
};

export default TextWithEditFunction;
