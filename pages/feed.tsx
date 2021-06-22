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

interface Props {
  data: Project[];
}

const Feed = ({ data: initialData }: Props) => {
  const { data, error } = useSWR<Project[]>("/api/latest-projects", {
    initialData,
    onSuccess: (data) => {
      if (data.length > 0 && !selectedProject) {
        setProject(data[0]);
      }
    },
  });

  React.useEffect(() => {
    if (initialData) {
      if (initialData.length > 0 && !selectedProject) {
        setProject(initialData[0]);
      }
    }
  }, [initialData]);

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
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View>
        <Title style={{ fontSize: 24, textAlign: "center" }}>
          Recent Projects
        </Title>
        <ScrollView
          style={{
            padding: 16,
            minWidth: 400,
            backgroundColor: "lightgrey",
            borderRadius: 20,
          }}
        >
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
      </View>
      <View style={{ width: 16 }} />
      <View>
        <Title style={{ fontSize: 24, textAlign: "center" }}>
          {selectedProject?.title ?? "nothing selected"}
        </Title>
        <LivePreview project={selectedProject?.payload} />
      </View>
    </View>
  );
};

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const data = await getProjects();
//
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//
//   return {
//     revalidate: 60,
//     props: { data },
//   };
// };

export default Feed;
