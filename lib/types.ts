 import {RootState} from "../redux/types";

export interface Project {
  id: string;
  createdAt: number;
  title: string;
  payload: Omit<RootState, "_persist">;
}
