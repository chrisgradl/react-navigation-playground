import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ComponentType,
  PlaygroundNavigator,
  PlaygroundNavigatorType,
  PlaygroundScreen,
} from "../types";
import { nanoid } from "nanoid";
import { RootState } from "./store";
import { basicState } from "../BaseState";

const initialState: { [key: string]: PlaygroundNavigator } = {
  ...basicState.navigators,
};

const slice = createSlice({
  name: "NavigatorReducer",
  initialState,
  reducers: {
    addNavigator: (state) => {
      const id = nanoid();
      state[id] = {
        name: id,
        type: PlaygroundNavigatorType.Stack,
        id,
        navigatorProps: {},
        screens: {},
      };
    },
    deleteNavigator: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    editNavigator: (
      state,
      action: PayloadAction<{ data: Partial<PlaygroundNavigator>; id: string }>
    ) => {
      const { data, id } = action.payload;
      const nextNavigator = {
        ...state[id],
        ...data,
      };
      state[id] = nextNavigator as any;
    },
    addScreen: (state, action: PayloadAction<string>) => {
      const navigatorId = action.payload;
      const id = nanoid();
      state[navigatorId].screens[id] = {
        component: {
          type: ComponentType.View,
          navigatorId: undefined,
        },
        name: "screen" + id,
        id,
        screenOptions: {},
      };
    },
    deleteScreen: (
      state,
      action: PayloadAction<{ navigatorId: string; screenId: string }>
    ) => {
      const { screenId, navigatorId } = action.payload;
      delete state[navigatorId].screens[screenId];
    },
    editScreen: (
      state,
      action: PayloadAction<{
        data: Partial<PlaygroundScreen>;
        navigatorId: string;
        screenId: string;
      }>
    ) => {
      const { data, navigatorId, screenId } = action.payload;
      const nextScreen = {
        ...state[navigatorId].screens[screenId],
        ...data,
      };
      state[navigatorId].screens[screenId] = nextScreen as any;
    },
  },
});

export const {
  addNavigator,
  deleteNavigator,
  editNavigator,
  addScreen,
  deleteScreen,
  editScreen,
} = slice.actions;

export default slice.reducer;
