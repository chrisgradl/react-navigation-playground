import "react-native-gesture-handler";
import React from "react";
import Playground from "./components/Playground";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <Playground />
    </Provider>
  );
}
