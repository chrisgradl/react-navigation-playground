import React, { useState } from "react";
import {
  Button,
  IconButton,
  Modal,
  Portal,
  Subheading,
  Surface,
  TextInput,
  Title,
} from "react-native-paper";
import { RootState, useAppSelector } from "../redux/store";
import { View } from "react-native";
import { useRouter } from "next/router";

interface projectPost {
  title: string;
  payload: RootState;
}

async function createProject(data: projectPost) {
  const res = await fetch(`/api/add-project`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}

const CreateProjectButton: React.FC = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState<string | null>();
  const router = useRouter();

  const payload = useAppSelector((state) => state);

  const [error, setError] = useState();

  const onPressPublish = async () => {
    setError(undefined);
    try {
      const res = await createProject({ title, payload });
      if (res) {
        router.push({ pathname: "/feed", query: { id: res.id } });
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View>
      <Button color={"white"} onPress={() => setShow(true)}>
        Publish Project
      </Button>
      <Portal>
        <Modal
          onDismiss={() => setShow(false)}
          contentContainerStyle={{
            alignItems: "center",
            padding: 20,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0,
          }}
          visible={show}
        >
          <Surface
            style={{
              borderRadius: 6,
              width: 450,
              height: 250,
              backgroundColor: "white",
              padding: 16,
            }}
          >
            <IconButton
              color={"black"}
              size={25}
              onPress={() => setShow(false)}
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

            <Title style={{ textAlign: "center" }}>Publish your Project</Title>
            <TextInput
              value={title}
              onChangeText={setTitle}
              mode={"outlined"}
              label={"Title"}
            />
            <View style={{ height: 16 }} />
            <Button
              onPress={onPressPublish}
              disabled={!title}
              mode={"contained"}
            >
              Publish
            </Button>
            {error ? <Subheading>{error}</Subheading> : null}
          </Surface>
        </Modal>
      </Portal>
    </View>
  );
};

export default CreateProjectButton;
