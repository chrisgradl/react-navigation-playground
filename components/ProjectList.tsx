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
        <React.Fragment key={project.id}>
          <Card onPress={() => onPress(project)}>
            <Card.Title
              title={project.title}
              subtitle={new Date(project.createdAt).toLocaleString()}
            />
            <Card.Actions>
              <Button onPress={() => onPressEdit(project)}>Edit Project</Button>
            </Card.Actions>
          </Card>
          <View style={{ height: 16 }} />
        </React.Fragment>
      ))}
    </>
  );
};

export default ProjectList;
