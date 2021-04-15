import "./styles.css";
import "react-native-gesture-handler";
import React from "react";
import Playground from "./components/Playground";
import { Provider } from "react-redux";
import store from "./redux/store";

import { View } from "react-native";
import PaperWrapper from "./components/PaperWrapper";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PaperWrapper>
          <Playground />
        </PaperWrapper>
      </Provider>
    </View>
  );
}
