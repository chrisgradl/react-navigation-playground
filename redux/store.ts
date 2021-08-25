import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./RootReducer";
import { TemplateTabs } from "../Templates";
import { useMemo } from "react";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import window from "@react-navigation/native/src/__mocks__/window";
import {PersistConfig} from "redux-persist/es/types";

const persistConfig = {
  key: "root",
  storage,
  timeout: 200,

};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function makeStore(preloadedState: any = TemplateTabs) {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
  });
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: TemplateTabs as any,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useStore(initialState) {
  const store = useMemo(() => {
    const createdStore = makeStore(initialState);
    const persistor = persistStore(createdStore);
    if (initialState) {
      persistor.purge();
    }
    return { store: createdStore, persistor };
  }, [initialState]);
  return store;
}
