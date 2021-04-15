import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectTheme, setTheme } from "../redux/ThemeReducer";
import { IconButton, Switch } from "react-native-paper";
import { View } from "react-native";

const ThemeSwitch: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <IconButton color={"white"} icon={"brightness-7"} />
      <Switch
        value={theme.dark}
        onValueChange={(value) =>
          dispatch(setTheme(value ? "dark" : "default"))
        }
      ></Switch>
      <IconButton icon={"brightness-2"} />
    </View>
  );
};

export default ThemeSwitch;
