import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ActivityIndicator, Paragraph } from "react-native-paper";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ProjectList from "../components/feed/ProjectList";
import { FeedHeader } from "../components/header/Header";
import { useProjectFeed } from "../lib/useProjectFeed";

const LivePreview = dynamic(() => import("../components/preview/LivePreview"), {
  ssr: false,
  loading: () => <View style={{ width: 400 }} />,
});

const Feed = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    setProject,
    data,
    isLoading,
    error,
    selectedProject,
  } = useProjectFeed({ id });

  return (
    <View style={styles.pageContainer}>
      <FeedHeader />
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.listContainer}>
          {isLoading ? (
            <ActivityIndicator style={{ marginTop: 32 }} size={"large"} />
          ) : null}
          {error ? <Paragraph>Error... {error.message}</Paragraph> : null}
          <ProjectList
            projects={data}
            onPress={setProject}
            onPressEdit={(p) =>
              router.push({ pathname: "/", query: { id: p.id } })
            }
          />
        </View>
        <View style={styles.previewContainer}>
          <LivePreview project={selectedProject?.payload} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
  scrollContainer: {
    flexDirection: "row",
    flex: 1,
    minWidth: 1000,
    justifyContent: "center",
  },
  listContainer: { width: 450, paddingHorizontal: 32 },
  previewContainer: { justifyContent: "center", paddingVertical: 32 },
});

export default Feed;
