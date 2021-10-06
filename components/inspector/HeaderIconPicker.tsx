import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Button, IconButton, Searchbar, Subheading } from "react-native-paper";
import Overlay from "../misc/Overlay";
import InspectorItem from "./InspectorItem";
import { HeaderIcon } from "../../types";
import SelectNavigatorOverlay from "./SelectNavigatorOverlay";
import IconPicker from "../misc/IconPicker";

export const iconList = Object.keys(
  require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json")
);

interface Props {
  label: string;
  value: HeaderIcon;
  onValueChange(value: HeaderIcon): void;
}

const HeaderIconPicker: React.FC<Props> = ({ onValueChange, value, label }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  if (!value) {
    return (
      <InspectorItem style={{ paddingHorizontal: 16 }}>
        <TouchableOpacity
          onPress={() =>
            onValueChange({ icon: "menu", action: "toggleDrawer" })
          }
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Subheading>{label}</Subheading>
          <IconButton
            onPress={() =>
              onValueChange({ icon: "menu", action: "toggleDrawer" })
            }
            icon={"plus"}
          />
        </TouchableOpacity>
      </InspectorItem>
    );
  }

  const { payload, icon, action } = value;

  return (
    <InspectorItem style={{ padding: 16, paddingTop: 0 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Subheading>{label}</Subheading>
        <IconButton onPress={() => onValueChange(undefined)} icon={"close"} />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Subheading>Icon</Subheading>
          <IconPicker
            value={icon}
            onSelect={(nextIcon) => onValueChange({ ...value, icon: nextIcon })}
            renderButton={({ onPress }) => (
              <Button
                onPress={onPress}
                contentStyle={{ justifyContent: "flex-start" }}
                icon={icon}
              >
                {icon || "No Icon Selected"}
              </Button>
            )}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Subheading>Action</Subheading>
          <Button
            onPress={() =>
              onValueChange({
                ...value,
                action:
                  value.action === "toggleDrawer" ? "navigate" : "toggleDrawer",
              })
            }
            contentStyle={{ justifyContent: "flex-start" }}
          >
            {action}
          </Button>
        </View>

        {action === "navigate" && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Subheading>Navigate To</Subheading>
            <Button
              onPress={() => setShowMenu(true)}
              contentStyle={{ justifyContent: "flex-start" }}
            >
              {payload ? payload : "no set"}
            </Button>
          </View>
        )}
        <SelectNavigatorOverlay
          onDismiss={() => setShowMenu(false)}
          visible={showMenu}
          onSelect={(navigatorName) => {
            onValueChange({ ...value, payload: navigatorName });
            setShowMenu(false);
          }}
        />
      </View>
    </InspectorItem>
  );
};

export default HeaderIconPicker;
