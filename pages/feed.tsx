import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import useSWR from "swr";
import { Button, Card, Title } from "react-native-paper";
import { Project } from "../lib/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ProjectList from "../components/ProjectList";

const LivePreview = dynamic(() => import("../components/LivePreview"), {
  ssr: false,
});

interface Props {
  data: Project[];
}

const Feed = ({ data: initialData }: Props) => {
  const router = useRouter();

  const { id } = router.query;

  const { data, error } = useSWR<Project[]>("/api/latest-projects", {
    initialData,
    onSuccess: (data) => {
      if (data.length > 0 && !selectedProject) {
        if (id) {
          history.replaceState(null, null, "/feed");
          const project = data.find((p) => p.id === id);
          if (project) {
            setProject(project);
            return;
          }
        }

        setProject(data[0]);
      }
    },
  });

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
        <ScrollView
          style={{
            padding: 16,
            minWidth: 400,
            backgroundColor: "lightgrey",
            borderRadius: 20,
          }}
          stickyHeaderIndices={[0]}
        >
          <Title
            style={{
              fontSize: 24,
              textAlign: "center",
              backgroundColor: "lightgrey",
            }}
          >
            Recent Projects
          </Title>
          <ProjectList
            projects={data}
            onPress={setProject}
            onPressEdit={(p) =>
              router.push({ pathname: "/", query: { id: p.id } })
            }
          />
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
