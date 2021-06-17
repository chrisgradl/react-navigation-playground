import Projects from "../Templates";

const playgroundAPI = {
  getLatestProjects: () => {
    return ["Tabs", "Drawer"];
  },

  getProjectById: (id: string) => Projects[id],
};

export default playgroundAPI;
