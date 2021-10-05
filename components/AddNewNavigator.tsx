import React from "react";
import {Button, IconButton, List} from "react-native-paper";
import { addNavigator } from "../redux/NavigatorReducer";
import { nanoid } from "nanoid";
import { setSelectedInspector } from "../redux/SelectedInspectorReducer";
import { View } from "react-native"; import {useAppDispatch} from "../redux/types";

// <Button
//     icon={"plus"}

// >
//     Add Navigator
// </Button>

const AddNewNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <View
      style={{ borderRadius: 8, borderColor: "rgba(0, 122, 255, 0.12)", borderWidth: 2 }}
    >
      <List.Item
        left={(props) => (
          <IconButton icon={"plus-circle"} color={"rgb(0, 122, 255)"} size={18} />
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
    </View>
  );
};

export default AddNewNavigator;
