import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { Project } from "../../types";

interface Props {
  projects: Project[];
  onPress(project: Project);
  onPressEdit(project: Project);
}

const ProjectList: React.FC<Props> = ({ projects, onPress, onPressEdit }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {projects?.map((project) => (
        <View style={{ paddingVertical: 8 }} key={project.id}>
          <Card elevation={0} onPress={() => onPress(project)}>
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
    </ScrollView>
  );
};

export default ProjectList;
