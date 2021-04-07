import React from "react";
import { Picker, View } from "react-native";
import {
  Button,
  Paragraph,
  RadioButton,
  Subheading,
  TextInput,
  Title,
} from "react-native-paper";
import { useAppSelector } from "../../redux/store";
import {
  deleteScreen,
  editScreen as editScreenAction,
} from "../../redux/NavigatorReducer";
import { useDispatch } from "react-redux";
import { ComponentType } from "../../types";
import { selectScreen } from "../../redux/SelectedInspectorReducer";
import InspectorItem, { InspectorItemSpace } from "./InspectorItem";

const ScreenInspector: React.FC = () => {
  const screen = useAppSelector(selectScreen);
  const { navigatorId } = useAppSelector((state) => state.inspector);
  const navigators = useAppSelector((state) => state.navigators);
  const navigatorList = Object.values(navigators).filter(
    (nav) => nav.id !== navigatorId
  );
  const dispatch = useDispatch();

  if (!screen) {
    return <Title>Select Screen</Title>;
  }

  const editScreen = (data) =>
    dispatch(editScreenAction({ screenId: screen.id, navigatorId, data }));

  return (
    <View>
      <TextInput
        label={"Name"}
        mode={"outlined"}
        dense
        value={screen.name}
        onChangeText={(value) =>
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
            <RadioButton.Item value={c} label={c} />
          ))}
        </RadioButton.Group>

        {screen.component.type === ComponentType.Navigator && (
          <View style={{ paddingLeft: 14, paddingRight: 24 }}>
            <Picker
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
                <Picker.Item label={nav.name} value={nav.id} />
              ))}
            </Picker>
          </View>
        )}
      </InspectorItem>
      <InspectorItemSpace />
      <Button
        onPress={() =>
          dispatch(deleteScreen({ navigatorId, screenId: screen.id }))
        }
        mode={"contained"}
        icon={"trash-can-outline"}
        color={"red"}
      >
        Delete Screen
      </Button>
    </View>
  );
};

export default ScreenInspector;
