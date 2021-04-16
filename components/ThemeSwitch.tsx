import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectTheme, setTheme } from "../redux/ThemeReducer";
import { IconButton, Subheading, Switch } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";

const ThemeSwitch: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  return (
    <TouchableOpacity
      onPress={() => dispatch(setTheme(theme.dark ? "default" : "dark"))}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 10,
      }}
    >
      <Subheading style={{ flex: 1 }}>Theme</Subheading>
      <IconButton
        size={24}
        icon={theme.dark ? "brightness-2" : "brightness-7"}
      />
    </TouchableOpacity>
  );
};

export default ThemeSwitch;
