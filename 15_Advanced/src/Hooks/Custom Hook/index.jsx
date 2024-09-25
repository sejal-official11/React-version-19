import { createContext , useContext} from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "Sejal";
  const myAge = 22;

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};


// custom Hook

export const useBoiContext = () => {
    const context = useContext(BioContext)
    return context;

}