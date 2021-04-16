import "./styles.css";
import "react-native-gesture-handler";
import React from "react";
import Playground from "./components/Playground";
import { Provider } from "react-redux";
import StoreConfig from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { View } from "react-native";
import PaperWrapper from "./components/PaperWrapper";

const { persistor, store } = StoreConfig();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperWrapper>
            <Playground />
          </PaperWrapper>
        </PersistGate>
      </Provider>
    </View>
  );
}
