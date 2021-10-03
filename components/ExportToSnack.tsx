import React, { useRef, useState } from "react";
import { useAppSelector } from "../redux/store";
import createCodeSnippet from "../util/CodeSnippet";
import { Button } from "react-native-paper";

interface Props {}

const dependencies = [
  "react-native-screens",
  "@react-navigation/stack",
  "react-native-reanimated",
  "@react-navigation/drawer",
  "@react-navigation/native",
  "react-native-gesture-handler",
  "@react-navigation/bottom-tabs",
  "react-native-safe-area-context",
  "@react-native-community/masked-view",
  "react-native-paper",
  "@expo/vector-icons"
];

const ExportToSnack: React.FC<Props> = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);
  const state = useAppSelector((state) => state);
  const [loading, setLoading] = useState(false);

  const openSnack = async () => {
    setLoading(true);
    const code = await createCodeSnippet(state, true);
    const files = {
      "App.js": {
        type: "CODE",
        contents: code,
      },
    };
    codeInputRef.current.value = JSON.stringify(files);
    formRef.current.submit();
    setLoading(false);
  };

  return (
    <form
      ref={formRef}
      action="https://snack.expo.io"
      method="POST"
      target="_blank"
    >
      <input type="hidden" name="platform" value="web" />
      <input type="hidden" name="name" value="React-Navigation Playground" />
      <input type="hidden" name="dependencies" value={dependencies} />
      <input ref={codeInputRef} type="hidden" name="files" value={undefined} />
      <input type="hidden" name="sdkVersion" value="latest" />
      <Button
        color={"white"}
        icon={"open-in-new"}
        disabled={loading}
        onPress={openSnack}
      >
        Open Snack
      </Button>
    </form>
  );
};

export default ExportToSnack;
