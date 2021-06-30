import { useRouter } from "next/router";
import React, { useState } from "react";
import { useStore } from "../redux/store";
import { ScrollView } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PaperWrapper from "./PaperWrapper";
import Playground from "./Playground";

export default function App() {
  const { query } = useRouter();

  const id = query?.id;

  const [preState, setPreState] = useState();

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async (id) => {
      try {
        setLoading(true);
        const res = await fetch(`api/project/${id}`, { signal });
        const json = await res.json();
        setPreState(json.payload);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
        history.replaceState(null, null, "/");
      }
    };

    if (id) {
      fetchData(id);
    } else {
      console.log("no id");
    }

    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [id]);

  const { store, persistor } = useStore(preState);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1, minWidth: 1000 }}
      horizontal={true}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperWrapper>
            <Playground isLoading={loading} />
          </PaperWrapper>
        </PersistGate>
      </Provider>
    </ScrollView>
  );
}
