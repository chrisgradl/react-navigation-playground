import React, { useContext } from "react";
import { PlaygroundState } from "../types";

function usePlaygroundState() {
  const state = useContext(PlaygroundContext);

  return state;
}

const PlaygroundContext = React.createContext<PlaygroundState>(undefined);

interface Props {
  state: PlaygroundState;
}

const PlaygroundProvider: React.FC<Props> = ({ children, state }) => {
  return (
    <PlaygroundContext.Provider value={state}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export { PlaygroundProvider, usePlaygroundState };
