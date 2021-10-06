import React from "react";
import Overlay from "../misc/Overlay";
import { List, Title } from "react-native-paper";
import { ScrollView, View } from "react-native"; import {useAppSelector} from "../../redux/types";

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
          <React.Fragment key={value.id}>
            <List.Item
              title={value.name}
              onPress={() => onSelect(value.name)}
            />
            {Object.values(value.screens).map((screen) => (
              <List.Item
                key={screen.id}
                title={screen.name}
                onPress={() => onSelect(screen.name)}
              />
            ))}
            <View style={{ height: 16 }} />
          </React.Fragment>
        ))}
      </ScrollView>
    </Overlay>
  );
};

export default SelectNavigatorOverlay;
