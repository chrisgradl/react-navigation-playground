import React from "react";
import { ScrollView, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { IconButton, List } from "react-native-paper";
import AddNewNavigator from "./AddNewNavigator";
import { ComponentType, PlaygroundScreen } from "../types";
import { setSelectedInspector } from "../redux/SelectedInspectorReducer";
import { deleteNavigator, deleteScreen } from "../redux/NavigatorReducer";

const NavItem: React.FC<{
  selected: boolean;
  title: string;
  onPress(): void;
  onPressDelete?(): void;
}> = ({ onPress, selected, title, onPressDelete }) => (
  <List.Item
    titleStyle={selected && { color: "rgb(0, 122, 255)", fontWeight: "bold" }}
    style={
      selected && {
        borderRadius: 8,
        backgroundColor: "rgba(0, 122, 255, 0.12)",
      }
    }
    title={title}
    onPress={onPress}
    right={
      selected
        ? (props) => (
            <IconButton style={{padding: 0}} onPress={onPressDelete} icon={"delete"} size={18} />
          )
        : null
    }
  />
);

const getTitleFromScreen = (screen: PlaygroundScreen, navigators: any) => {
  return (
    screen.name +
    (screen.component.type === ComponentType.Navigator
      ? " -> " + navigators[screen.component?.navigatorId]?.name
      : " -> View")
  );
};

const NavigatorList: React.FC = () => {
  const navigators = useAppSelector((state) => state.navigators);

  const inspector = useAppSelector((state) => state.inspector);

  const dispatch = useAppDispatch();

  const navigatorArray = Object.values(navigators);

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        {navigatorArray.map(({ id, name, screens, type }) => (
          <React.Fragment key={id}>
            <NavItem
              onPressDelete={() => dispatch(deleteNavigator(id))}
              selected={
                inspector.type === "Navigator" && id === inspector.navigatorId
              }
              title={`${name} Type:${type}`}
              onPress={() =>
                dispatch(
                  setSelectedInspector({
                    type: "Navigator",
                    screenId: undefined,
                    navigatorId: id,
                  })
                )
              }
            />
            <View style={{ paddingLeft: 16 }}>
              {Object.values(screens).map((screen) => (
                <NavItem
                  selected={screen.id === inspector.screenId}
                  onPress={() =>
                    dispatch(
                      setSelectedInspector({
                        type: "Screen",
                        screenId: screen.id,
                        navigatorId: id,
                      })
                    )
                  }
                  onPressDelete={() =>
                    dispatch(
                      deleteScreen({ navigatorId: id, screenId: screen.id })
                    )
                  }
                  key={screen.id}
                  title={getTitleFromScreen(screen, navigators)}
                />
              ))}
            </View>
          </React.Fragment>
        ))}
        <AddNewNavigator />
      </ScrollView>
    </>
  );
};

export default NavigatorList;
