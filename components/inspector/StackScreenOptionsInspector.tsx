import React from "react";
import IconPicker from "../IconPicker";
import InspectorItem, { InspectorItemSpace } from "./InspectorItem";
import { Checkbox } from "react-native-paper";
import { PlaygroundScreen } from "../../types";

interface Props {
  screen: PlaygroundScreen;
  editScreen(value: Partial<PlaygroundScreen>);
}

const StackScreenOptionsInspector: React.FC<Props> = ({
  screen,
  editScreen,
}) => {
  return (
    <>
      <IconPicker
        label={"Header Left"}
        value={screen?.headerLeft}
        onValueChange={(value) =>
          editScreen({
            headerLeft: value,
          })
        }
      />
      <InspectorItemSpace />
      <IconPicker
        label={"Header Right"}
        value={screen?.headerRight}
        onValueChange={(value) =>
          editScreen({
            headerRight: value,
          })
        }
      />
      <InspectorItemSpace />
      <InspectorItem>
        <Checkbox.Item
          onPress={() =>
            editScreen({
              headerShown: !screen.headerShown,
            })
          }
          label="headerShown"
          status={screen.headerShown ? "checked" : "unchecked"}
        />
      </InspectorItem>
    </>
  );
};

export default StackScreenOptionsInspector;
