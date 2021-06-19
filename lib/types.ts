import { RootState } from "../redux/store";

export interface Project {
  id: string;
  createdAt: string;
  title: string;
  payload: RootState;
}
