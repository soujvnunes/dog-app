import React, { useContext, useState, createContext } from "react";
import { ReactElement } from "react";

const initialState = {
  breed: {
    name: "",
    uri: "",
    weight: "",
    origin: "",
    lifeSpan: "",
    bredFor: "",
    temperament: "",
    wikipedia: "",
  },
  setBreed: () => {},
};

type BreedT = StateT["breed"];
type StateT = {
  breed: typeof initialState.breed;
  setBreed(params: BreedT): void;
};

const Context = createContext<StateT>(initialState);

function Provider({ children }: { children: ReactElement }) {
  const [state, setState] = useState<StateT>({
    breed: initialState.breed,
    setBreed,
  });

  function setBreed(breed: BreedT) {
    setState((prevBreed) => ({ ...prevBreed, breed }));
  }

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
function useBreed() {
  return useContext(Context);
}

Context.displayName = "useBreed";
export default useBreed;
export { Provider };
