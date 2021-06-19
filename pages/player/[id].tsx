import React from "react";
import { View } from "react-native";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { Title } from "react-native-paper";

const LivePreview = dynamic(() => import("../../components/LivePreview"), {
  ssr: false,
});

interface Props {}

const Player: React.FC<Props> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isValidating } = useSWR("/api/project/" + id, {
    refreshInterval: 5000,
  });

  const loading = !data && !error

  if (loading) {
    return <Title>Loading...</Title>;
  }

  if (error) {
    return <Title>Error... {error.message}</Title>;
  }

  return (
    <View style={{ justifyContent: "center" }}>
      <LivePreview project={data.payload} />
    </View>
  );
};

export default Player;
