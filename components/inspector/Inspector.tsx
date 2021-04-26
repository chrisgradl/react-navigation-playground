import React from "react";
import { View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addScreen,
  editNavigator,
} from "../../redux/NavigatorReducer";
import { Button, Checkbox, Title } from "react-native-paper";
import { selectRootId, setRootId } from "../../redux/RootIdReducer";
import InspectorItem, { InspectorItemSpace } from "./InspectorItem";
import {
  selectNavigator,
  setSelectedInspector,
} from "../../redux/SelectedInspectorReducer";
import NavigationTypeItem from "./NavigationTypeItem";
import { nanoid } from "nanoid";
import TextWithEditFunction from "../TextWithEditFunction";
import ThemeSwitch from "../ThemeSwitch";

const Inspector: React.FC = () => {
  const navigator = useAppSelector(selectNavigator);

  const rootID = useAppSelector(selectRootId);

  const dispatch = useAppDispatch();

  if (!navigator) {
    return <Title>please Select a Navigator</Title>;
  }

  const { id, name } = navigator;

  const isRootNav = id === rootID;

  return (
    <View>
      <TextWithEditFunction
        label={"Name"}
        value={name}
        onValueChangeSubmit={(value) => {
          dispatch(editNavigator({ id, data: { name: value } }));
        }}
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
      {isRootNav && (
        <>
          <InspectorItem>
            <ThemeSwitch />
          </InspectorItem>
          <InspectorItemSpace />
        </>
      )}

      <NavigationTypeItem
        onChange={(type) => dispatch(editNavigator({ id, data: { type } }))}
        value={navigator.type}
      />
      <InspectorItemSpace />
      <Button
        mode={"contained"}
        icon={"plus"}
        onPress={() => {
          const screenId = nanoid();
          dispatch(addScreen({ navigatorId: id, screenId }));
          dispatch(
            setSelectedInspector({ type: "Screen", navigatorId: id, screenId })
          );
        }}
      >
        Add new Screen
      </Button>
      <InspectorItemSpace />
    </View>
  );
};

export default Inspector;
