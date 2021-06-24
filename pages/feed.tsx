import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import useSWR from "swr";
import {
  ActivityIndicator,
  Button,
  Card,
  IconButton,
  Title,
} from "react-native-paper";
import { Project } from "../lib/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ProjectList from "../components/ProjectList";

const LivePreview = dynamic(() => import("../components/LivePreview"), {
  ssr: false,
  loading: () => <View style={{ width: 400 }} />,
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

  if (error) {
    return <Title>Error... {error.message}</Title>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#eaeaea" }}>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "white",
          paddingVertical: 8,
          borderColor: "lightgrey",
          borderBottomWidth: 0.3,
        }}
      >
        <Title style={{ fontSize: 24 }}>Published Navigations</Title>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{ width: 450 }}>
          {data ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <ProjectList
                projects={data}
                onPress={setProject}
                onPressEdit={(p) =>
                  router.push({ pathname: "/", query: { id: p.id } })
                }
              />
            </ScrollView>
          ) : null}
          {isLoading ? (
            <ActivityIndicator style={{ marginTop: 32 }} size={"large"} />
          ) : null}
        </View>
        <View style={{ width: 30 }} />
        <View style={{ paddingBottom: 60, paddingTop: 16 }}>
          <LivePreview project={selectedProject?.payload} />
        </View>
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
