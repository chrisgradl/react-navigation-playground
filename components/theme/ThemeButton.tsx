import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setSelectedInspector } from "../../redux/SelectedInspectorReducer";
import MenuButton from "../MenuButton";

const ThemeButton: React.FC = () => {
  const { type } = useAppSelector((state) => state.inspector);

  const selected = type === "Theme";

  const dispatch = useAppDispatch();

  return (
    <MenuButton
      title={"Theme"}
      icon={"palette"}
      selected={selected}
      onPress={() =>
        dispatch(
          setSelectedInspector({
            type: "Theme",
            screenId: undefined,
            navigatorId: undefined,
          })
        )
      }
    />
  );
};

export default ThemeButton;
