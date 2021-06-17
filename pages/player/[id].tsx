import React from "react";
import { View } from "react-native";
import { useRouter } from "next/router";
import playgroundAPI from "../../lib/playgroundAPI";
import LivePreview from "../../components/LivePreview";

interface Props {}

const Player: React.FC<Props> = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = playgroundAPI.getProjectById(id as string);

  return (
    <View style={{ justifyContent: "center" }}>
      <LivePreview project={project} />
    </View>
  );
};

export default Player;
