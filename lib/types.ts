import { RootState } from "../redux/store";

export interface Project {
  id: string;
  createdAt: number;
  title: string;
  payload: RootState;
}
