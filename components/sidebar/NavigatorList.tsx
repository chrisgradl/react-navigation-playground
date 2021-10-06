import React from "react";
import { View } from "react-native";
import { ComponentType, PlaygroundScreen } from "../../types";
import { setSelectedInspector } from "../../redux/SelectedInspectorReducer";
import { deleteNavigator, deleteScreen } from "../../redux/NavigatorReducer";
import { useAppDispatch, useAppSelector } from "../../redux/types";
import NavItem from "./NavItem";
import SectionContainer from "./SectionContainer";

const NavigatorList: React.FC = () => {
  const navigators = useAppSelector((state) => state.navigators);

  const inspector = useAppSelector((state) => state.inspector);

  const dispatch = useAppDispatch();

  const navigatorArray = Object.values(navigators);

  return (
    <>
      {navigatorArray.map(({ id, name, screens, type }) => (
        <SectionContainer
          key={id}
          selected={"Navigator" && id === inspector.navigatorId}
        >
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
                key={screen.id}
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
                title={getTitleFromScreen(screen, navigators)}
              />
            ))}
          </View>
        </SectionContainer>
      ))}
    </>
  );
};

const getTitleFromScreen = (screen: PlaygroundScreen, navigators: any) => {
  return (
    screen.name +
    (screen.component.type === ComponentType.Navigator
      ? " -> " + navigators[screen.component?.navigatorId]?.name
      : " -> View")
  );
};



export default NavigatorList;
