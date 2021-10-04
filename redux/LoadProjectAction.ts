import { createAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TemplateDrawer, TemplateTabs } from "./Templates";

export const loadProject = createAction<Partial<RootState>>("loadProject");

export const resetState = () =>
  loadProject({
    navigators: {},
    preview: "UI",
  });

export const loadTabsTemplate = () => loadProject(TemplateTabs);

export const loadDrawerTemplate = () => loadProject(TemplateDrawer);
