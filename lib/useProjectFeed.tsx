import { useState } from "react";
import { Project } from "../types";
import useSWR from "swr";

export function useProjectFeed({ id }) {
  const [selectedProject, setProject] = useState<Project>();

  const { data, error } = useSWR<Project[]>("/api/latest-projects", {
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

  const isLoading = !data && !error;

  return { data, isLoading, setProject, error, selectedProject };
}
