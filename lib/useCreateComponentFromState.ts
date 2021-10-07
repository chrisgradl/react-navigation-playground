import {PlaygroundState} from "../types";
import {useEffect, useState} from "react";
import createCodeSnippet from "./code/createCodeSnippet";
import getCodeComponent from "./code/getCodeComponent";

export default function useCreateComponentFromState(project: PlaygroundState) {
    const [Component, setComponent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const loadComponent = async () => {
            if (!project) {
                return;
            }
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

    return {Component, error, loading};
}
