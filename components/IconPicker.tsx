import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Button, IconButton, Searchbar, Subheading } from "react-native-paper";
import Overlay from "./Overlay";
import InspectorItem from "./inspector/InspectorItem";
import { HeaderIcon } from "../types";
import SelectNavigatorOverlay from "./SelectNavigatorOverlay";

export const iconList = Object.keys(
  require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json")
);

interface Props {
  label: string;
  value: HeaderIcon;
  onValueChange(value: HeaderIcon): void;
  isIconPickerHeader?: boolean;
}

const IconPicker: React.FC<Props> = ({
  onValueChange,
  value,
  label,
  isIconPickerHeader = false,
}) => {
  const [show, setShowModal] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [filterTerm, setFilterTerm] = useState<string>(undefined);

  const getFilteredItems = () => {
    if (!filterTerm || filterTerm.length === 0) {
      return iconList;
    } else {
      return iconList.filter((value) =>
        value?.toLowerCase().includes(filterTerm?.toLowerCase())
      );
    }
  };

  const closeModal = () => setShowModal(false);

  const renderItem = (item) => {
    return (
      <Button
        icon={item.item}
        onPress={() => {
          onValueChange({ ...value, icon: item.item });
          closeModal();
        }}
      >
        {item.item}
      </Button>
    );
  };

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
          <Button
            onPress={() => setShowModal(true)}
            contentStyle={{ justifyContent: "flex-start" }}
            icon={icon}
          >
            {icon || "No Icon Selected"}
          </Button>
        </View>
        {!isIconPickerHeader && (
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
                    value.action === "toggleDrawer"
                      ? "navigate"
                      : "toggleDrawer",
                })
              }
              contentStyle={{ justifyContent: "flex-start" }}
            >
              {action}
            </Button>
          </View>
        )}
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

        <Overlay
          dismissable={true}
          onDismiss={closeModal}
          visible={show}
          height={500}
        >
          <Searchbar value={filterTerm} onChangeText={setFilterTerm} />
          <FlatList
            keyExtractor={(item) => item}
            data={getFilteredItems()}
            renderItem={renderItem}
          />
        </Overlay>
      </View>
    </InspectorItem>
  );
};

export default IconPicker;
