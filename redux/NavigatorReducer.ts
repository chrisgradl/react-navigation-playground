import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ComponentType,
  NavigatorRecord,
  PlaygroundNavigator,
  PlaygroundNavigatorType,
  PlaygroundScreen,
} from "../types";
import { customAlphabet } from "nanoid";

const createNameId = customAlphabet("0123456789", 4);


const slice = createSlice({
  name: "NavigatorReducer",
  initialState: {} as NavigatorRecord,
  reducers: {
    addNavigator: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const name = "Navigator" + createNameId();
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
      const name = "Screen" + createNameId();
      state[navigatorId].screens[screenId] = {
        component: {
          type: ComponentType.View,
          navigatorId: undefined,
        },
        name,
        id: screenId,
        headerShown: true,
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
