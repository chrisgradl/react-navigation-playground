import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import useSWR from "swr";
import { Button, Card, Title } from "react-native-paper";
import { Project } from "../lib/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const LivePreview = dynamic(() => import("../components/LivePreview"), {
  ssr: false,
});

const Feed: React.FC = () => {
  const { data, error } = useSWR<Project[]>("/api/latest-projects", {
    // initialData: allStages,
    //refreshInterval: 5000,
    onSuccess: (data) => {
      if (data.length > 0 && !selectedProject) {
        setProject(data[0]);
      }
    },
  });

  const router = useRouter();

  const [selectedProject, setProject] = useState<Project>();

  const isLoading = !data && !error;

  if (isLoading) {
    return <Title>Loading...</Title>;
  }

  if (error) {
    return <Title>Error... {error.message}</Title>;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <ScrollView
          style={{
            padding: 16,
            minWidth: 400,
            backgroundColor: "lightgrey",
            borderRadius: 20,
          }}
        >
          <Title style={{ fontSize: 24, textAlign: "center" }}>
            Recent Projects
          </Title>
          {data.map((data) => (
            <>
              <Card onPress={() => setProject(data)}>
                <Card.Title
                  title={data.title}
                  subtitle={new Date(data.createdAt).toLocaleString()}
                />
                <Card.Actions>
                  <Button
                    onPress={() =>
                      router.push({ pathname: "/", query: { id: data.id } })
                    }
                  >
                    Edit Project
                  </Button>
                </Card.Actions>
              </Card>
              <View style={{ height: 16 }} />
            </>
          ))}
        </ScrollView>
        <View style={{ width: 16 }} />
        <View>
          <Title style={{ fontSize: 24, textAlign: "center" }}>
            {selectedProject?.title ?? "nothing selected"}
          </Title>
          <LivePreview project={selectedProject?.payload} />
        </View>
      </View>
    </View>
  );
};

export default Feed;
