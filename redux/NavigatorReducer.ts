import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ComponentType,
  NavigatorRecord,
  PlaygroundNavigator,
  PlaygroundNavigatorType,
  PlaygroundScreen,
} from "../types";
import { customAlphabet, nanoid } from "nanoid";

const createNameId = customAlphabet("0123456789", 4);

const initialState: NavigatorRecord = {
  "1": {
    id: "1",
    name: "RootNavigator Tab",
    screens: {
      screen1: {
        component: {
          type: ComponentType.Navigator,
          navigatorId: "2",
        },
        name: "screen1",
        id: "screen1",
      },
      screen2: {
        component: {
          type: ComponentType.Navigator,
          navigatorId: "3",
        },
        name: "screen2",
        id: "screen2",
      },
    },
    type: PlaygroundNavigatorType.Tab,
  },
  "2": {
    name: "Stack 1 in Tab",
    id: "2",
    type: PlaygroundNavigatorType.Stack,
    screens: {
      "4": {
        component: {
          type: ComponentType.View,
          navigatorId: undefined,
        },
        name: "screen4",
        id: "4",
      },
    },
  },
  "3": {
    name: "Stack 2 in Tab",
    id: "3",
    type: PlaygroundNavigatorType.Stack,
    screens: {
      "5": {
        component: {
          type: ComponentType.View,
          navigatorId: undefined,
        },
        name: "screen5",
        id: "5",
      },
    },
  },
};

const slice = createSlice({
  name: "NavigatorReducer",
  initialState,
  reducers: {
    addNavigator: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const name = "Navigator-" + createNameId();
      state[id] = {
        name,
        type: PlaygroundNavigatorType.Stack,
        id,
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
    addScreen: (
      state,
      action: PayloadAction<{ navigatorId: string; screenId: string }>
    ) => {
      const { navigatorId, screenId } = action.payload;
      const name = "Screen-" + createNameId();
      state[navigatorId].screens[screenId] = {
        component: {
          type: ComponentType.View,
          navigatorId: undefined,
        },
        name,
        id: screenId,
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
