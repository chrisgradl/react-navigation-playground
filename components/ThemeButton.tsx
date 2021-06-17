import React from "react";
import { View } from "react-native";
import { IconButton, List } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setSelectedInspector } from "../redux/SelectedInspectorReducer";

const ThemeButton: React.FC = () => {
  const { type } = useAppSelector((state) => state.inspector);

  const selected = type === "Theme";

  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        borderRadius: 8,
        backgroundColor: "rgba(0, 122, 255, 0.12)",
        marginBottom: 16,
      }}
    >
      <List.Item
        titleStyle={
          selected && { color: "rgb(0, 122, 255)", fontWeight: "bold" }
        }
        title={"Theme"}
        onPress={() =>
          dispatch(
            setSelectedInspector({
              type: "Theme",
              screenId: undefined,
              navigatorId: undefined,
            })
          )
        }
        right={() => (
          <List.Icon icon={"palette"} color={selected && "rgb(0, 122, 255)"} />
        )}
      />
    </View>
  );
};

export default ThemeButton;
