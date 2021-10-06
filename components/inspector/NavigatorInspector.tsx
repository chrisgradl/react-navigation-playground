import React from "react";
import {addScreen, editNavigator} from "../../redux/NavigatorReducer";
import {Button, Checkbox, Title} from "react-native-paper";
import {selectRootId, setRootId} from "../../redux/RootIdReducer";
import InspectorItem, {InspectorItemSpace} from "./InspectorItem";
import {selectNavigator} from "../../redux/SelectedInspectorReducer";
import NavigationTypeItem from "./NavigationTypeItem";
import {nanoid} from "nanoid";
import TextWithEditFunction from "../misc/TextWithEditFunction";
import {useAppDispatch, useAppSelector} from "../../redux/types";

const NavigatorInspector: React.FC = () => {
  const navigator = useAppSelector(selectNavigator);

  const rootID = useAppSelector(selectRootId);

  const dispatch = useAppDispatch();

  if (!navigator) {
    return <Title>please Select a Navigator</Title>;
  }

  const { id, name } = navigator;

  const isRootNav = id === rootID;

  const pressSetTabBarLabel = () =>
    dispatch(
      editNavigator({
        id,
        data: { tabBarShowLabel: !navigator.tabBarShowLabel },
      })
    );

  const pressAddScreen = () => {
    const screenId = nanoid();
    dispatch(addScreen({ navigatorId: id, screenId }));
  };

  return (
    <>
      <TextWithEditFunction
        label={"Name"}
        value={name}
        onValueChangeSubmit={(value) =>
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
      <InspectorItem>
        <Checkbox.Item
          onPress={pressSetTabBarLabel}
          label="tabBarShowLabel"
          status={navigator.tabBarShowLabel ? "checked" : "unchecked"}
        />
      </InspectorItem>

      <InspectorItemSpace />
      <Button mode={"contained"} icon={"plus"} onPress={pressAddScreen}>
        Add new Screen
      </Button>
      <InspectorItemSpace />
    </>
  );
};

export default NavigatorInspector;
