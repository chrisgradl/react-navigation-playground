import React from "react";
import { ScrollView } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PaperWrapper from "../components/PaperWrapper";
import Playground from "../components/Playground";
import StoreConfig from "../redux/store";

const { persistor, store } = StoreConfig();

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
