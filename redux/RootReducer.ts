import { combineReducers, PayloadAction } from "@reduxjs/toolkit";
import navigators from "./NavigatorReducer";
import rootId from "./RootIdReducer";
import inspector from "./SelectedInspectorReducer";
import theme from "./ThemeReducer";
import { loadProject } from "./LoadProjectAction";

const reducers = combineReducers({
  navigators,
  rootId,
  inspector,
  theme,
});

const rootReducer = (state, action: PayloadAction<any>) => {
  if (action.type === loadProject.type) {
    state = action.payload;
  }
  return reducers(state, action);
};

export default rootReducer;
