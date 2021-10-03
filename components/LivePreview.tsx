import Smartphone from "./Smartphone";
import ErrorBoundary from "./ErrorBoundary";
import React, { useEffect, useState } from "react";
import createCodeSnippet from "../util/CodeSnippet";
import getCodeComponent from "../util/getCodeComponent";
import { ActivityIndicator, Paragraph } from "react-native-paper";
import { PlaygroundState } from "../types";

export function useCreateComponentFromState(project: PlaygroundState) {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      setError(null);
      setLoading(true);
      try {
        const code = await createCodeSnippet(project, false);
        const comp = await getCodeComponent(code);
        setComponent(() => comp);
      } catch (e) {
        setError("Failed to generate Code: " + e.message + "\n " + e.stack);
        setComponent(null);
      } finally {
        setLoading(false);
      }
    };
    loadComponent();
  }, [project]);

  return { Component, error, loading };
}

export default function LivePreview({ project }) {

  const {error, loading, Component} = useCreateComponentFromState(project)

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
