import React from "react";
import { View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addScreen,
  deleteNavigator,
  editNavigator,
} from "../../redux/NavigatorReducer";
import { Button, Checkbox, TextInput, Title } from "react-native-paper";
import { selectRootId, setRootId } from "../../redux/RootIdReducer";
import InspectorItem, {
  InspectorItemSpace,
} from "./InspectorItem";
import { selectNavigator } from "../../redux/SelectedInspectorReducer";
import NavigationTypeItem from "./NavigationTypeItem";

interface Props {}

const Inspector: React.FC<Props> = () => {
  const navigator = useAppSelector(selectNavigator);

  const rootID = useAppSelector(selectRootId);

  const dispatch = useAppDispatch();

  if (!navigator) {
    return <Title>please Select a Navigator</Title>;
  }

  const { id, type, name, navigatorProps } = navigator;

  const isRootNav = id === rootID;

  return (
    <View>
      <TextInput
        label={"Name"}
        mode={"outlined"}
        dense
        value={name}
        onChangeText={(value) =>
          dispatch(editNavigator({ id, data: { name: value } }))
        }
      />
      <InspectorItemSpace />
      <InspectorItem>
        <Checkbox.Item
          disabled={isRootNav}
          onPress={() => dispatch(setRootId(id))}
          label="Set as Root Navigator"
          status={isRootNav ? "checked" : "unchecked"}
        />
      </InspectorItem>
      <InspectorItemSpace />
      <NavigationTypeItem
        onChange={(type) => dispatch(editNavigator({ id, data: { type } }))}
        value={navigator.type}
      />
      <InspectorItemSpace />
      <Button
        mode={"contained"}
        icon={"plus"}
        onPress={() => dispatch(addScreen(id))}
      >
        Add new Screen
      </Button>
      <InspectorItemSpace />
      <InspectorItemSpace />
      <Button
        mode={"contained"}
        onPress={() => dispatch(deleteNavigator(id))}
        icon={"trash-can-outline"}
        color={"red"}
      >
        Delete Navigator
      </Button>
    </View>
  );
};

export default Inspector;
