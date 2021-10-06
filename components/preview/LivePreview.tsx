import Smartphone from "./Smartphone";
import ErrorBoundary from "../misc/ErrorBoundary";
import React from "react";
import { ActivityIndicator, Paragraph } from "react-native-paper";
import useCreateComponentFromState from "../../lib/useCreateComponentFromState";

export default function LivePreview({ project }) {
  const { error, loading, Component } = useCreateComponentFromState(project);

  if (error) {
    return <Paragraph style={{ padding: 16 }}>{error}</Paragraph>;
  }

  return (
    <Smartphone>
      <ErrorBoundary>
        {loading ? <ActivityIndicator size={"large"} /> : null}
        {typeof Component === "function" ? <Component /> : null}
      </ErrorBoundary>
    </Smartphone>
  );
}
