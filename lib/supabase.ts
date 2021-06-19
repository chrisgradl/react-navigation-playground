import { createClient } from "@supabase/supabase-js";
import { Project } from "./types";
import { RootState } from "../redux/store";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("project")
    .select("*")
    .order("createdAt", { ascending: false });
  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getProjectById(id: string): Promise<Project> {
  const { data, error } = await supabase
    .from("project")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error(error.message);
  }

  if (data && data.length === 1) {
    return data[0];
  } else {
    throw new Error("Project not found");
  }
}

export async function createProject(data: {
  title: string;
  payload: RootState;
}) {
  return supabase.from("project").insert(data);
}
