import React from "react";
import { Button } from "react-native-paper";
import { addNavigator } from "../redux/NavigatorReducer";
import { useAppDispatch } from "../redux/store";

interface Props {}

const AddNewNavigator: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  return (
    <Button
      icon={"plus"}
      onPress={() => dispatch(addNavigator())}
    >
      Add Navigator
    </Button>
  );
};

export default AddNewNavigator;
