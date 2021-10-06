import React from "react";
import HeaderIconPicker from "./HeaderIconPicker";
import InspectorItem, { InspectorItemSpace } from "./InspectorItem";
import { Checkbox, Subheading, Title } from "react-native-paper";
import { PlaygroundNavigatorType, PlaygroundScreen } from "../../types";
import TabIconPicker from "./TabIconPicker";

interface Props {
  screen: PlaygroundScreen;
  editScreen(value: Partial<PlaygroundScreen>);
}

const ScreenOptionsInspector: React.FC<Props> = ({ screen, editScreen }) => {
  return (
    <>
      <Subheading>Screen Options</Subheading>
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
      <InspectorItemSpace />
      <HeaderIconPicker
        label={"Header Left"}
        value={screen?.headerLeft}
        onValueChange={(value) =>
          editScreen({
            headerLeft: value,
          })
        }
      />
      <InspectorItemSpace />
      <HeaderIconPicker
        label={"Header Right"}
        value={screen?.headerRight}
        onValueChange={(value) =>
          editScreen({
            headerRight: value,
          })
        }
      />
      <InspectorItemSpace />
      <TabIconPicker
        icon={screen?.tabbarIcon?.icon}
        onValueChange={(value) =>
          editScreen({
            tabbarIcon: {
              icon: value,
              action: null,
              payload: null,
            },
          })
        }
      />
      <InspectorItemSpace />
    </>
  );
};

export default ScreenOptionsInspector;
