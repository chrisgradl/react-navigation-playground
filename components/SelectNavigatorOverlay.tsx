import React from "react";
import Overlay from "./Overlay";
import { useAppSelector } from "../redux/store";
import { List, Title } from "react-native-paper";
import { ScrollView, View } from "react-native";

interface Props {
  onDismiss();
  visible: boolean;
  onSelect(navigatorName: string);
}

const SelectNavigatorOverlay: React.FC<Props> = ({
  onDismiss,
  visible,
  onSelect,
}) => {
  const navigators = useAppSelector((state) => state.navigators);

  const navigatorList = Object.values(navigators);

  return (
    <Overlay onDismiss={onDismiss} visible={visible} dismissable={true}>
      <Title>Select Navigator or Screen</Title>
      <ScrollView>
        {navigatorList.map((value) => (
          <>
            <List.Item
              title={value.name}
              onPress={() => onSelect(value.name)}
            />
            {Object.values(value.screens).map((screen) => (
              <List.Item
                title={screen.name}
                onPress={() => onSelect(screen.name)}
              />
            ))}
            <View style={{ height: 16 }} />
          </>
        ))}
      </ScrollView>
    </Overlay>
  );
};

export default SelectNavigatorOverlay;
