import React from "react";
import {IconButton, Modal, Portal, Surface} from "react-native-paper";

interface Props {
  dismissable: boolean;
  onDismiss(): void;
  visible: boolean;
  width?: number;
  height?: number;
}

const HopsasaOverlay: React.FC<Props> = ({
  children,
  dismissable,
  onDismiss,
  visible,
  width = 450,
  height = 350,
}) => {
  return (
    <Portal>
      <Modal
        contentContainerStyle={{
          alignItems: "center",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0,
        }}
        onDismiss={onDismiss}
        visible={visible}
        dismissable={dismissable}
      >
        <Surface
          style={{
            borderRadius: 6,
            width,
            height,
            padding: 16,
          }}
        >
          <IconButton
            color={"black"}
            size={25}
            onPress={onDismiss}
            style={{
              position: "absolute",
              top: -15,
              right: -18,
              width: 25,
              height: 25,
              backgroundColor: "white",
            }}
            icon={"close-circle"}
          />
          {children}
        </Surface>
      </Modal>
    </Portal>
  );
};

export default HopsasaOverlay;
