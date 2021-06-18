import React from "react";
import { ScrollView } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PaperWrapper from "../components/PaperWrapper";
import StoreConfig from "../redux/store";
import dynamic from "next/dynamic";

const { persistor, store } = StoreConfig();


const Playground = dynamic(
  () => import("../components/Playground"),
  { ssr: false }
);


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
