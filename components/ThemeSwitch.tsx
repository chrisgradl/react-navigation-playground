import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectTheme, setTheme } from "../redux/ThemeReducer";
import { IconButton, Switch } from "react-native-paper";
import { View } from "react-native";

const ThemeSwitch: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const color = theme.dark ? "rgb(18, 18, 18)" : "white";

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Switch
        value={theme.dark}
        onValueChange={(value) =>
          dispatch(setTheme(value ? "dark" : "default"))
        }
      ></Switch>
      <IconButton
        color={color}
        icon={theme.dark ? "brightness-2" : "brightness-7"}
      />
    </View>
  );
};

export default ThemeSwitch;
