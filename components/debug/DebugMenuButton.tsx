import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setSelectedInspector } from "../../redux/SelectedInspectorReducer";
import MenuButton from "../MenuButton";

const ThemeButton: React.FC = () => {
  const { type } = useAppSelector((state) => state.inspector);

  const selected = type === "Debug";

  const dispatch = useAppDispatch();

  return (
    <MenuButton
      title={"Debug"}
      icon={"bug"}
      selected={selected}
      onPress={() =>
        dispatch(
          setSelectedInspector({
            type: "Debug",
            screenId: undefined,
            navigatorId: undefined,
          })
        )
      }
    />
  );
};

export default ThemeButton;
