import { createAction } from "@reduxjs/toolkit";
import { TemplateDrawer, TemplateTabs } from "./Templates"; import {RootState} from "./types";

export const loadProject = createAction<Partial<RootState>>("loadProject");

export const resetState = () =>
  loadProject({
    navigators: {},
    preview: "UI",
  });

export const loadTabsTemplate = () => loadProject(TemplateTabs);

export const loadDrawerTemplate = () => loadProject(TemplateDrawer);
