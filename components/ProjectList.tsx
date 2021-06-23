import React from "react";
import { View } from "react-native";
import { Project } from "../lib/types";
import { Button, Card } from "react-native-paper";

interface Props {
  projects: Project[];
  onPress(project: Project);
  onPressEdit(project: Project);
}

const ProjectList: React.FC<Props> = ({ projects, onPress, onPressEdit }) => {
  return (
    <>
      {projects.map((project) => (
        <View style={{ paddingHorizontal: 16 }} key={project.id}>
          <View style={{ height: 16 }} />
          <Card
            style={{ borderRadius: 6 }}
            elevation={0}
            onPress={() => onPress(project)}
          >
            <Card.Title
              title={project.title}
              subtitle={`created: ${new Date(
                project.createdAt
              ).toLocaleString()}`}
            />
            <Card.Actions>
              <Button onPress={() => onPressEdit(project)}>Edit Project</Button>
            </Card.Actions>
          </Card>
        </View>
      ))}
    </>
  );
};

export default ProjectList;
