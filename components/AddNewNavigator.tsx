import React from "react";
import { Button, List } from "react-native-paper";
import { addNavigator } from "../redux/NavigatorReducer";
import { useAppDispatch } from "../redux/store";
import { nanoid } from "nanoid";
import { setSelectedInspector } from "../redux/SelectedInspectorReducer";

// <Button
//     icon={"plus"}

// >
//     Add Navigator
// </Button>

const AddNewNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <List.Item
      style={{ paddingLeft: 0, marginLeft: 0 }}
      left={(props) => (
        <List.Icon icon={"plus-circle"} color={"rgb(0, 122, 255)"} />
      )}
      title={"Add Navigator"}
      onPress={() => {
        const id = nanoid();
        dispatch(addNavigator(id));
        dispatch(
          setSelectedInspector({
            type: "Navigator",
            screenId: undefined,
            navigatorId: id,
          })
        );
      }}
    />
  );
};

export default AddNewNavigator;
