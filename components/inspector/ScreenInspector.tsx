import React from "react";
import { Picker, View } from "react-native";
import { RadioButton, Subheading, Title } from "react-native-paper";
import { useAppSelector } from "../../redux/store";
import { editScreen as editScreenAction } from "../../redux/NavigatorReducer";
import { useDispatch } from "react-redux";
import { ComponentType, PlaygroundNavigatorType } from "../../types";
import { selectScreen } from "../../redux/SelectedInspectorReducer";
import InspectorItem, { InspectorItemSpace } from "./InspectorItem";
import TextWithEditFunction from "../TextWithEditFunction";
import StackScreenOptionsInspector from "./StackScreenOptionsInspector";
import IconPicker from "../IconPicker";

const ScreenInspector: React.FC = () => {
  const screen = useAppSelector(selectScreen);
  const { navigatorId } = useAppSelector((state) => state.inspector);

  const navigators = useAppSelector((state) => state.navigators);
  const navigatorList = Object.values(navigators).filter(
    (nav) => nav.id !== navigatorId
  );
  const navigator = navigators[navigatorId];
  const dispatch = useDispatch();

  if (!screen) {
    return <Title>Select Screen</Title>;
  }

  const editScreen = (data) =>
    dispatch(editScreenAction({ screenId: screen.id, navigatorId, data }));

  return (
    <View>
      <TextWithEditFunction
        label={"Name"}
        value={screen.name}
        onValueChangeSubmit={(value) =>
          editScreen({
            name: value,
          })
        }
      />
      <InspectorItemSpace />
      <InspectorItem style={{ padding: 16 }}>
        <Subheading>Component</Subheading>
        <RadioButton.Group
          onValueChange={(value) =>
            editScreen({
              component: {
                type: value as ComponentType,
                navigatorId: undefined,
              },
            })
          }
          value={screen.component.type}
        >
          {Object.values(ComponentType).map((c) => (
            <RadioButton.Item key={c} value={c} label={c} />
          ))}
        </RadioButton.Group>

        {screen.component.type === ComponentType.Navigator && (
          <View style={{ paddingLeft: 14, paddingRight: 24 }}>
            <Picker
              style={{ fontFamily: "Inter", height: 30, borderColor: "black" }}
              selectedValue={screen.component.navigatorId}
              onValueChange={(value) =>
                editScreen({
                  component: {
                    navigatorId: value,
                    type: ComponentType.Navigator,
                  },
                })
              }
            >
              <Picker.Item label={"Select a Navigator"} value={undefined} />
              {navigatorList.map((nav) => (
                <Picker.Item key={nav.id} label={nav.name} value={nav.id} />
              ))}
            </Picker>
          </View>
        )}
      </InspectorItem>
      <InspectorItemSpace />

      {navigator.type === PlaygroundNavigatorType.Tab ? (
        <>
          <IconPicker
            label={"Tab Icon"}
            value={screen?.tabbarIcon}
            onValueChange={(value) =>
              editScreen({
                tabbarIcon: value,
              })
            }
          />
          <InspectorItemSpace />
        </>
      ) : null}

      <StackScreenOptionsInspector screen={screen} editScreen={editScreen} />
      <InspectorItemSpace />
    </View>
  );
};

export default ScreenInspector;
