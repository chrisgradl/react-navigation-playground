import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { iconList } from "../inspector/HeaderIconPicker";
import { Button, Searchbar } from "react-native-paper";
import Overlay from "./Overlay";

interface Props {
  value: string;
  onSelect(icon: string);
  renderButton({ onPress }): React.ReactNode;
}

const SimpleIconPicker: React.FC<Props> = ({
  value,
  onSelect,
  renderButton,
}) => {
  const [show, setShowModal] = useState<boolean>(false);
  const [filterTerm, setFilterTerm] = useState<string>("");

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
          onSelect(item.item);
          closeModal();
        }}
      >
        {item.item}
      </Button>
    );
  };

  return (
    <>
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
      {renderButton({ onPress: () => setShowModal(true) })}
    </>
  );
};

export default SimpleIconPicker;
