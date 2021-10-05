import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {useMemo} from "react";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import {TemplateTabs} from "./Templates";
import {PersistConfig} from "redux-persist/es/types";

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  timeout: 200,

};

export function makeStore(preloadedState: any = TemplateTabs) {
  return configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
  });
}


export function useStore(initialState) {
  const store = useMemo(() => {

    const createdStore = makeStore(initialState);
    const persistor = persistStore(createdStore, {});

    if (initialState) {
      //delete persisted store when a project is loaded from the feed
      persistor.purge();
    }
    return { store: createdStore, persistor };
  }, [initialState]);
  return store;
}
