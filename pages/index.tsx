import React, { useRef } from "react";
import { ScrollView } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PaperWrapper from "../components/PaperWrapper";
import StoreConfig from "../redux/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const { persistor, store } = StoreConfig();

const Playground = dynamic(() => import("../components/Playground"), {
  ssr: false,
});

export default function App() {
  const { query } = useRouter();

  const id = query?.id;

  const controllerRef = useRef<AbortController | null>();

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async (id) => {
      try {
        const res = await fetch(`api/project/${id}`, { signal });
        const json = await res.json();
        console.log("got data", json);
      } catch (e) {
        console.log(e);
      } finally {
      }
    };

    if (id) {
      console.log("got id fetch data", id)
      fetchData(id);
    } else {
      console.log( "no id")
    }

    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [id]);

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
