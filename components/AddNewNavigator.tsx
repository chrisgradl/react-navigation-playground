import React from "react";
import { Button } from "react-native-paper";
import { addNavigator } from "../redux/NavigatorReducer";
import { useAppDispatch } from "../redux/store";
import { nanoid } from "nanoid";
import { setSelectedInspector } from "../redux/SelectedInspectorReducer";

interface Props {}

const AddNewNavigator: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  return (
    <Button
      icon={"plus"}
      onPress={() => {
        const id = nanoid();
        dispatch(addNavigator(id));
        setSelectedInspector({
          type: "Navigator",
          screenId: undefined,
          navigatorId: id,
        });
      }}
    >
      Add Navigator
    </Button>
  );
};

export default AddNewNavigator;
