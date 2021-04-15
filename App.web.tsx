import "react-native-gesture-handler";
import React from "react";
import Playground from "./components/Playground";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles.css";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Playground />
      </Provider>
    </View>
  );
}
