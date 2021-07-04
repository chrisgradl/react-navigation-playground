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

export interface ProjectPost {
  title: string;
  payload: RootState;
}

async function createProject(data: ProjectPost) {
  const res = await fetch(`/api/add-project`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (res.ok) {
    return res.json();
  } else {
    const error = await res.json();
    throw new Error(`${res.status} ${error.error}`);
  }
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
          onDismiss={() => {
            setShow(false);
            setError(null);
            setTitle(null);
          }}
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
              minHeight: 250,
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
            {error ? (
              <Subheading style={{ height: 200 }}>{error}</Subheading>
            ) : null}
          </Surface>
        </Modal>
      </Portal>
    </View>
  );
};

export default CreateProjectButton;
