import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  createContext,
  ReactNode,
} from "react";

type State = {
  data: { [key: string]: string };
  handleSet: (params: State) => void;
  handleReset: () => void;
};

const data = {
  name: "",
  uri: "",
  weight: "",
  origin: "",
  lifeSpan: "",
  bredFor: "",
  temperament: "",
  wikipedia: "",
};
const initialState = {
  data,
  handleSet: () => {},
  handleReset: () => {},
};
const Context = createContext<State>(initialState);

function Provider({ children }: { children: ReactNode }) {
  const [breed, setBreed]: [State, Dispatch<SetStateAction<State>>] =
    useState<State>({
      data,
      handleSet,
      handleReset,
    });

  function handleSet(data: State) {
    setBreed((prevBreed) => ({ ...prevBreed, data }));
  }
  function handleReset() {
    setBreed((prevBreed) => prevBreed);
  }

  return <Context.Provider value={breed}>{children}</Context.Provider>;
}
function Consumer() {
  return useContext(Context);
}

Context.displayName = "Breed";
export default {
  Provider,
  Consumer,
};
