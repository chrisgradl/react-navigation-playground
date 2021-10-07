import React, { useRef, useState } from "react";
import createCodeSnippet from "../../lib/code/createCodeSnippet";
import { Button } from "react-native-paper";
import { useAppSelector } from "../../redux/types";

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
  "@expo/vector-icons",
];

interface Props {
  renderButton(props: { loading: boolean; onPress(): void }): React.ReactNode;
}

const ExportToSnack: React.FC<Props> = ({ renderButton }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);
  const state = useAppSelector((state) => state);
  const [loading, setLoading] = useState(false);

  const openSnack = async () => {
    setLoading(true);
    try {
      const code = await createCodeSnippet(state, true);

      const files = {
        "App.js": {
          type: "CODE",
          contents: code,
        },
      };

      codeInputRef.current.value = JSON.stringify(files);
      formRef.current.submit();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      action="https://snack.expo.dev"
      method="POST"
      target="_blank"
    >
      <input type="hidden" name="platform" value="web" />
      <input type="hidden" name="name" value="React-Navigation Playground" />
      <input type="hidden" name="dependencies" value={dependencies} />
      <input ref={codeInputRef} type="hidden" name="files" value={undefined} />
      <input type="hidden" name="sdkVersion" value="42.0.0" />
      {renderButton({ loading, onPress: openSnack })}
    </form>
  );
};


export default ExportToSnack;
