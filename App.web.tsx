
import "react-native-gesture-handler";
import React from "react";
import Playground from "./components/Playground";
import { Provider } from "react-redux";
import StoreConfig from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ScrollView } from "react-native";
import PaperWrapper from "./components/PaperWrapper";
const { persistor, store } = StoreConfig();

if (!global.setImmediate) {
  // @ts-ignore
  global.setImmediate = setTimeout;
}

export default function App() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1, minWidth: 1000 }}
      horizontal={true}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperWrapper>
            <Playground />
          </PaperWrapper>
        </PersistGate>
      </Provider>
    </ScrollView>
  );
}
