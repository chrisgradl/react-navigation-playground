import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainerRef } from "@react-navigation/core";
import useDevToolsBase, {
  ActionData,
  InitData,
} from "../../lib/useDevToolsBase";
import { Button, List, Paragraph, Subheading, Title } from "react-native-paper";

export const navigationRef = React.createRef<NavigationContainerRef>();

type ActionArrayType = Array<InitData | ActionData>;

const Item = ({
  data,
  onPress,
}: {
  data: InitData | ActionData;
  onPress();
}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View
      style={{
        padding: 8,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: "rgba(0, 122, 255, 0.12)",
      }}
    >
      <List.Accordion
        title={data.type}
        expanded={expanded}
        onPress={handlePress}
      >
        {data.type === "action" ? (
          <>
            <Subheading>Action:</Subheading>
            <Paragraph>{JSON.stringify(data.action, null, 2)}</Paragraph>
          </>
        ) : null}
        <Button onPress={onPress}>set State</Button>
        <Subheading>State:</Subheading>
        <Paragraph>{JSON.stringify(data.state, null, 2)}</Paragraph>
      </List.Accordion>
    </View>
  );

  // if (data.type === "init") {
  //   return <Button onPress={onPress}>{data.type}</Button>;
  // } else {
  //   return (
  //     <Button onPress={onPress}>
  //       {data.type} {JSON.stringify(data.action, null, 2)}
  //     </Button>
  //   );
  // }
};

const DebugInspector: React.FC = () => {
  const [actions, setActions] = useState<ActionArrayType>([]);

  const { resetRoot } = useDevToolsBase(navigationRef, (result) => {
    console.log(result);

    setActions((prevState) => [...prevState, result]);
  });

  return (
    <View>
      <Title>Actions</Title>
      {actions.map((action) => (
        <Item data={action} onPress={() => resetRoot(action.state)} />
      ))}
    </View>
  );
};

export default DebugInspector;
